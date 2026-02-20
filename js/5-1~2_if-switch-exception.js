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

/**
 * 例外処理
 * - 例外を制御するための構文。
 * - JavaScriptエンジンが自動的に発生させる例外
 *   - ReferenceError: 未定義の変数や関数を参照した場合などに発生。
 *   - TypeError: 値の型が期待される型と異なる場合に発生。
 *   - SyntaxError: 文法エラーがある場合に発生。
 * - 開発者が明示的に発生させる例外
 *   - throw文: 例外を発生させるための構文。
 *     - 外部リソースの接続失敗時を把握するためにも使用される。
 *   	 - 流れを中断して上に投げるので、tryブロック外使用だとthrow実行で処理終了となる。
 *     - 「この関数内で処理を完結できるか？」
 *       - YES → return
 *       - NO → throw
 *
 * Q. JavaScriptエンジンが自動的に発生させる例外が発生しても、処理を続行するには？
 * A. try-catch-finally構文を使用する。
 *    - tryブロック: 例外が発生する可能性のあるコードを囲む。
 *    - catchブロック: 例外が発生した場合に実行されるコードを囲む。例外オブジェクトを引数として受け取ることができる。
 *    - finallyブロック: 例外の有無に関わらず、必ず実行されるコードを囲む。
 *      - 例）ファイルを閉じる、データベース接続切断などの処理に使用される。
 */
console.log('---例外処理---');
try {
	functionThatDoesNotExist(); // ReferenceErrorが発生する。
	console.log('この行は実行されません。');
} catch (error) {
	console.error('エラーが発生しました。', error);
} finally {
	console.log('エラーが発生しましたが、この行は表示されます。');
}

console.log('---明示的な例外処理（throw文）---');
try {
	const age3 = -5;
	if (age3 < 0) {
		throw new Error('年齢は0以上でなければなりません。');
	}
} catch (error) {
	console.error('エラーが発生しました。', error);
} finally {
	console.log('エラーが発生しましたが、この行は表示されます。');
}
