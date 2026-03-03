export {};

/**
 * 組み込みオブジェクト
 * - JavaScriptエンジンであらかじめ提供されているオブジェクト群のこと
 * - 以下、代表例を挙げていくが完璧に覚える必要はない。必要な時に知識を取り出せれば
 *   OK
 */
/**
 * Windowオブジェクト
 * - グローバルオブジェクト
 *   - 使用時にグローバルオブジェクト名を省略できる。
 * - ※ Node.js環境下ではglobalオブジェクトになる。
 */
console.log('---windowオブジェクト---');

function timeout() {
	console.log('---example:setTimeout---');
	global.setTimeout(() => {
		console.log('Hello!');
	}, 1000);

	setTimeout(() => {
		console.log('bye bye!');
	}, 1000);
}
timeout();

function interval() {
	console.log('---example:setInterval---');
	let cnt = 0;
	const intervalID = setInterval(() => {
		cnt++;
		console.log(cnt);

		if (cnt === 5) {
			clearInterval(intervalID);
			console.log('～インターバル終了～');
		}
	});
}
interval();

/**
 * Dateオブジェクト
 * - nowだけだとISO 8601形式で出力。
 *   - 例）2026-03-03T02:02:05.432Z
 * - now + [文字列]だと暗黙の型変換が働くので形式が変わる。
 *   - now.toString()が働く
 *   - 例）Tue Mar 03 2026 11:03:18 GMT+0900 (日本標準時)
 * - 以上より、日付形式は明示的に指定したほうが安全だと思う。
 *
 * - Intl: 国際化（Internationalization）のための標準API
 */
function dateObj() {
	console.log('---Dateオブジェクト---');
	let now = new Date();
	console.log(now);
	console.log(now + ': 文字列連結で暗黙の型変換によりnow.toString()発動');

	let day;
	switch (now.getDay()) {
		case 0:
			day = '日';
			break;
		case 1:
			day = '月';
			break;
		case 2:
			day = '火';
			break;
		case 3:
			day = '水';
			break;
		case 4:
			day = '木';
			break;
		case 5:
			day = '金';
			break;
		case 6:
			day = '土';
			break;
		default:
			day = '?';
	}

	console.log(
		`本日は${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日（${day}）です`
	);
	console.log(
		`本日は${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日${now.toLocaleDateString('ja-JP', { weekday: 'long' })}です。`
	);

	console.log(
		new Intl.DateTimeFormat('ja-JP', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		}).format(now)
	);

	console.log(now.toISOString());
}
dateObj();
