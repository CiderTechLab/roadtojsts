export {};

/**
 * 条件分岐
 * - if文、三項演算子（条件演算子）、switch文などがある。
 * - ブロックを省略することもできるが、可読性の観点から推奨されない。
 */

/**
 * if文
 */
console.log('---if文---');

const age = 65;
let message;

if (age >= 18 && age < 65) {
	message = '大人料金です。';
} else if (age >= 12 && age < 18) {
	message = '学生料金です。';
} else {
	message = '無料です。'; // FIX: 年齢がマイナスでも1000歳でも無料になる。
}
console.log(message);

// 小改善ver
// @example Number.isInteger([変数])  整数判定に使用できる。
const age2 = 130;
let message2;

if (!Number.isInteger(age2)) {
	message2 = '年齢が不正です。';
} else if (age2 < 0) {
	message2 = '年齢が不正です。';
} else if (age2 >= 120) {
	message2 = '係員にお申し付けください。';
} else {
	if (age2 <= 11 || age2 >= 65) {
		message2 = '無料です。';
	} else if (age2 >= 12 && age2 <= 17) {
		message2 = '学生料金です。';
	} else {
		message2 = '大人料金です。';
	}
}

console.log(message2);

/**
 * if文（演算子なし）
 * - nullかundefinedではないかをチェックする時に使用。
 * - 主に関数の動作チェックで使われる。
 */
console.log('---if文（演算子なし）---');
const isValid = true;
if (isValid) {
	console.log('有効な値です。');
}

/**
 * 三項演算子（条件演算子）
 * - [条件式] ? [真の値] : [偽の値]
 * - 条件式がtrueの場合は「真の値」が、falseの場合は「偽の値」が返される。
 * - 制御構文ではあるけど、思想的には式に違い。
 */
console.log('---三項演算子---');
const point = 85;
point >= 80 ? console.log('合格') : console.log('不合格');

// 小改善ver
// 判定の責務と表示の責務を分ける。
const point2 = 85;
const result = point2 >= 80 ? '合格' : '不合格';
console.log(result);

/**
 * switch文
 * - 比較対象の値に対して幅がない場合に有効。
 * - 年齢のように幅がある場合は、if文の方が適している。
 */

// 以下は誤用例であるし、適した使い方でもない、
console.log('---switch文---');
function pointJudge(point) {
	switch (point) {
		case point >= 90:
			console.log('優');
			break;
		case point >= 70:
			console.log('良');
			break;
		case point >= 50:
			console.log('可');
			break;
		default:
			console.log('不合格');
	}
}
pointJudge(85);

// 小改善ver
function pointJudge2(grade) {
	let changeGrade;

	switch (grade) {
		case 'A':
			changeGrade = '優';
			break;
		case 'B':
			changeGrade = '良';
			break;
		case 'C':
		case 'D':
			changeGrade = '可';
			break;
		case 'E':
		default:
			changeGrade = '不合格';
	}

	return console.log(changeGrade);
}
pointJudge2('D');
