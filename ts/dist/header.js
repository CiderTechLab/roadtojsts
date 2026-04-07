function generateHeader() {
    const commonHeaderCode = `
	<h1>
		<span class="header__title--js">JS</span>&nbsp;&amp;&nbsp;
    <span class="header__title--ts">TS</span>
    <br class="title-linebreak" />&nbsp;Learn&nbsp;Notes&#x1f4da;
	</h1>
	<button class="toc-hamburger" aria-label="Toggle TOC">
		<span class="toc-hamburger__icon"></span>
	</button>`;
    const commonOverlayCode = `<div class="overlay"></div>`;
    let headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = commonHeaderCode;
        headerElement.insertAdjacentHTML('afterend', commonOverlayCode);
        // ハンバーガーボタンのクリックハンドラー
        const hamburger = headerElement.querySelector('.toc-hamburger');
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                const isOpen = headerElement.classList.toggle('is-open');
                hamburger.setAttribute('aria-expanded', String(isOpen));
                hamburger.setAttribute('aria-label', isOpen ? '目次を閉じる' : '目次を開く');
            });
        }
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateHeader);
}
else {
    generateHeader();
}
export {};
