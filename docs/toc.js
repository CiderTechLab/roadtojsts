/**
 * Table of Contents Generator
 * <main>要素内のh2, h3タグから自動的に目次を生成し、<aside>に挿入する
 */
/**
 * main要素内のh2, h3タグを取得する
 */
function getHeadings() {
    const main = document.querySelector('main');
    if (!main)
        return [];
    const headings = [];
    const headingElements = main.querySelectorAll('h2, h3');
    let h2Counter = 0;
    let h3Counter = 0;
    headingElements.forEach((element, index) => {
        const level = parseInt(element.tagName[1]);
        const text = element.textContent || '';
        // JavaScript側でカウンター値を手動計算
        let counterText = '';
        if (level === 2) {
            h2Counter++;
            h3Counter = 0;
            counterText = `${h2Counter}. `;
        }
        else if (level === 3) {
            h3Counter++;
            counterText = `${h2Counter}.${h3Counter} `;
        }
        // idが存在しない場合は自動生成
        let id = element.id;
        if (!id) {
            id = `heading-${index}`;
            element.id = id;
        }
        headings.push({ level, text, id, counterText });
    });
    return headings;
}
/**
 * 目次をHTMLで生成する
 */
function generateTableOfContentsHTML(headings) {
    if (headings.length === 0)
        return '';
    let html = '<button class="toc-hamburger" aria-label="目次を開く" aria-expanded="false">';
    html += '<span class="toc-hamburger__icon"></span>';
    html += '</button>\n';
    html += '<nav class="toc">\n';
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
            html += '    </ul>\n';
            currentLevel--;
        }
        // リストアイテムを追加
        const indent = '  '.repeat(heading.level - 2 + 1);
        const displayText = heading.counterText
            ? `${heading.counterText}${heading.text}`
            : heading.text;
        html += `${indent}<li class="toc-item"><a href="#${heading.id}">${displayText}</a></li>\n`;
    });
    // 残りのリストを閉じる
    while (currentLevel > 2) {
        html += '    </ul>\n';
        currentLevel--;
    }
    html += '  </ul>\n';
    html += '</nav>\n';
    return html;
}
/**
 * 目次を<aside>に挿入する
 */
function insertToc() {
    const aside = document.querySelector('aside');
    if (!aside)
        return;
    const headings = getHeadings();
    const tocHTML = generateTableOfContentsHTML(headings);
    aside.innerHTML = tocHTML;
    // ハンバーガーボタンのクリックハンドラー
    const hamburger = aside.querySelector('.toc-hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpen = aside.classList.toggle('is-open');
            hamburger.setAttribute('aria-expanded', String(isOpen));
            hamburger.setAttribute('aria-label', isOpen ? '目次を閉じる' : '目次を開く');
        });
    }
    // TOCリンクのクリック後にメニューを閉じる（イベントデリゲーション）
    aside.addEventListener('click', (event) => {
        const target = event.target;
        const link = target === null || target === void 0 ? void 0 : target.closest('.toc-item a');
        if (!link) {
            return;
        }
        aside.classList.remove('is-open');
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', '目次を開く');
        }
    });
}
/**
 * DOM読み込み完了時に目次を生成
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertToc);
}
else {
    insertToc();
}
export {};
