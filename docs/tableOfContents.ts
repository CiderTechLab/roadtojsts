/**
 * Table of Contents Generator
 * <main>要素内のh2, h3タグから自動的に目次を生成し、<aside>に挿入する
 */
export {};

interface HeadingElement {
  level: number;
  text: string;
  id: string;
}

/**
 * main要素内のh2, h3タグを取得する
 */
function getHeadings(): HeadingElement[] {
  const main = document.querySelector("main");
  if (!main) return [];

  const headings: HeadingElement[] = [];
  const headingElements = main.querySelectorAll("h2, h3");

  headingElements.forEach((element, index) => {
    const level = parseInt(element.tagName[1]);
    const text = element.textContent || "";

    // idが存在しない場合は自動生成
    let id = element.id;
    if (!id) {
      id = `heading-${index}`;
      (element as HTMLElement).id = id;
    }

    headings.push({ level, text, id });
  });

  return headings;
}

/**
 * 目次をHTMLで生成する
 */
function generateTableOfContentsHTML(headings: HeadingElement[]): string {
  if (headings.length === 0) return "";

  let html = '<nav class="toc">\n';
  html += '  <h2 class="text-xl font-bold mb-4">目次</h2>\n';
  html += '  <ul class="toc-list">\n';

  let currentLevel = 2;

  headings.forEach((heading) => {
    // レベルが上がった場合、新しいリストを開く
    while (currentLevel < heading.level) {
      html += '    <ul class="toc-nested">\n';
      currentLevel++;
    }

    // レベルが下がった場合、リストを閉じる
    while (currentLevel > heading.level) {
      html += "    </ul>\n";
      currentLevel--;
    }

    // リストアイテムを追加
    const indent = "  ".repeat(heading.level - 2 + 1);
    html += `${indent}<li class="toc-item"><a href="#${heading.id}">${heading.text}</a></li>\n`;
  });

  // 残りのリストを閉じる
  while (currentLevel > 2) {
    html += "    </ul>\n";
    currentLevel--;
  }

  html += "  </ul>\n";
  html += "</nav>\n";

  return html;
}

/**
 * 目次を<aside>に挿入する
 */
function insertTableOfContents(): void {
  const aside = document.querySelector("aside");
  if (!aside) return;

  const headings = getHeadings();
  const tocHTML = generateTableOfContentsHTML(headings);

  aside.innerHTML = tocHTML;

  // スタイルの追加
  applyStyles(aside);
}

/**
 * 目次要素にスタイルを適用する
 */
function applyStyles(aside: Element): void {
  const style = document.createElement("style");
  style.textContent = `
    aside {
      width: 250px;
      padding: 20px;
      background-color: #f9fafb;
      border-radius: 8px;
    }

    .toc {
      font-size: 14px;
    }

    .toc h2 {
      margin: 0 0 16px 0;
      font-size: 18px;
    }

    .toc-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc-list li {
      margin: 8px 0;
    }

    .toc-nested {
      list-style: none;
      padding-left: 20px;
      margin: 4px 0;
    }

    .toc-item a {
      color: #0891b2;
      text-decoration: none;
      transition: color 0.2s;
    }

    .toc-item a:hover {
      color: #0e7490;
      text-decoration: underline;
    }

    /* レスポンシブ対応 */
    @media (max-width: 1024px) {
      aside {
        width: 100%;
        position: static;
        max-height: none;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * DOM読み込み完了時に目次を生成
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", insertTableOfContents);
} else {
  insertTableOfContents();
}
