/**
 * @author S.K
 * Table of Contents Generator
 * <main>要素内のh2, h3タグから自動的に目次を生成し、
 * <aside class="sidebar-right">に挿入する
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
    let html = '<nav class="toc">\n';
    html += '  <h2 class="text-xl font-bold mb-4">ページ内目次</h2>\n';
    let inDetails = false;
    headings.forEach((heading) => {
        if (heading.level === 2) {
            // 前の details があれば閉じる
            if (inDetails) {
                html += '    </ul>\n';
                html += '  </details>\n';
            }
            // 新しい details を開く
            const displayText = heading.counterText
                ? `${heading.counterText}${heading.text}`
                : heading.text;
            html += `  <details>\n`;
            html += `    <summary><a href="#${heading.id}">${displayText}</a></summary>\n`;
            html += `    <ul class="toc-nested">\n`;
            inDetails = true;
        }
        else if (heading.level === 3) {
            // h3 のリストアイテムを追加
            if (!inDetails) {
                html += '  <ul class="toc-list">\n';
                inDetails = true;
            }
            const displayText = heading.counterText
                ? `${heading.counterText}${heading.text}`
                : heading.text;
            html += `      <li class="toc-item"><a href="#${heading.id}">${displayText}</a></li>\n`;
        }
    });
    // 残りの details を閉じる
    if (inDetails) {
        html += '    </ul>\n';
        html += '  </details>\n';
    }
    html += '</nav>\n';
    return html;
}
/**
 * 目次を<aside class="sidebar-right">に挿入する
 */
function insertToc() {
    const sidebarRight = document.querySelector('.aside-right');
    if (!sidebarRight)
        return;
    const headings = getHeadings();
    const tocHTML = generateTableOfContentsHTML(headings);
    sidebarRight.innerHTML = tocHTML;
    // ハンバーガーボタンを動的に作成
    let hamburger = document.querySelector('.toc-hamburger');
    if (!hamburger) {
        hamburger = document.createElement('button');
        hamburger.className = 'toc-hamburger';
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', '目次を開く');
        hamburger.innerHTML = '<span class="toc-hamburger__icon"></span>';
        document.body.appendChild(hamburger);
    }
    // ハンバーガーボタンのクリックハンドラー
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? '目次を閉じる' : '目次を開く');
    });
    // summary要素のクリックハンドラー
    const summaryElements = sidebarRight.querySelectorAll('summary');
    summaryElements.forEach((summary) => {
        summary.addEventListener('click', (event) => {
            const details = summary.closest('details');
            if (details) {
                details.toggleAttribute('open');
                event.preventDefault();
            }
        });
    });
    // TOCリンクのクリック後にメニューを閉じる（イベントデリゲーション）
    const handleTocLinkClick = (event) => {
        const target = event.target;
        const link = target === null || target === void 0 ? void 0 : target.closest('.toc-item a');
        if (!link) {
            return;
        }
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', '目次を開く');
    };
    sidebarRight.removeEventListener('click', handleTocLinkClick);
    sidebarRight.addEventListener('click', handleTocLinkClick);
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
