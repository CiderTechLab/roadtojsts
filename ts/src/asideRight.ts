/**
 * @author S.K
 * Table of Contents Generator
 * <main>要素内のh2, h3タグから自動的に目次を生成し、
 * <aside class="sidebar-right">に挿入する
 */

interface HeadingElement {
	level: number;
	text: string;
	id: string;
	counterText: string;
}

/**
 * main要素内のh2, h3タグを取得する
 */
function getHeadings(): HeadingElement[] {
	const main = document.querySelector('main');
	if (!main) return [];

	const headings: HeadingElement[] = [];
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
		} else if (level === 3) {
			h3Counter++;
			counterText = `${h2Counter}.${h3Counter} `;
		}

		// idが存在しない場合は自動生成
		let id = element.id;
		if (!id) {
			id = `heading-${index}`;
			(element as HTMLElement).id = id;
		}

		headings.push({ level, text, id, counterText });
	});

	return headings;
}

/**
 * 目次をHTMLで生成する
 */
function generateTableOfContentsHTML(headings: HeadingElement[]): string {
	if (headings.length === 0) return '';

	let html: string = '<nav class="toc">\n';
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
		} else if (heading.level === 3) {
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
function insertToc(): void {
	const sidebarRight = document.querySelector('.aside-right');
	if (!sidebarRight) return;

	const headings = getHeadings();
	const tocHTML = generateTableOfContentsHTML(headings);

	sidebarRight.innerHTML = tocHTML;

	// ハンバーガーボタンのクリックハンドラー
	const hamburger =
		sidebarRight.querySelector<HTMLButtonElement>('.toc-hamburger');
	if (hamburger) {
		hamburger.addEventListener('click', () => {
			const isOpen = sidebarRight.classList.toggle('is-open');
			// aside-left も同時に is-open クラスを付与（メニューの上下スタック表示用）
			const asideLeft = document.querySelector('.aside-left');
			if (asideLeft) {
				if (isOpen) {
					asideLeft.classList.add('is-open');
				} else {
					asideLeft.classList.remove('is-open');
				}
			}
			hamburger.setAttribute('aria-expanded', String(isOpen));
			hamburger.setAttribute(
				'aria-label',
				isOpen ? '目次を閉じる' : '目次を開く'
			);
		});
	}

	// summary要素のクリックハンドラー
	const summaryElements = sidebarRight.querySelectorAll<HTMLElement>('summary');
	summaryElements.forEach((summary) => {
		summary.addEventListener('click', (event: Event) => {
			const details = summary.closest<HTMLDetailsElement>('details');
			if (details) {
				details.toggleAttribute('open');
				event.preventDefault();
			}
		});
	});

	// TOCリンクのクリック後にメニューを閉じる（イベントデリゲーション）
	sidebarRight.addEventListener('click', (event: Event) => {
		const target = event.target as HTMLElement | null;
		const link = target?.closest<HTMLAnchorElement>('.toc-item a');
		if (!link) {
			return;
		}

		sidebarRight.classList.remove('is-open');
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
} else {
	insertToc();
}
