export {};

/**
 * 文字列(String)
 */
/**
 * 文字列結合
 */
const person = {
	name: 'watashi',
	age: 20,
};
console.log(
	'私の名前は' + person.name + 'です。年齢は' + person.age + '歳です。'
);

/**
 * シングルクオート
 */
console.log('ダブルクオートを"表示"させてみた');

/**
 * エスケープシーケンス
 */
console.log(
	'エスケープシーケンスで\"ダブルクオート\"を表示させ、\n改行してみた'
);

/**
 * 数値(Number)
 */
console.log('整数と小数点の加算も可能: ' + (10 + 0.5));
console.log(0.123);

/**
 * 数値(BigInt)
 * - 2020年に追加された新しい数値型。
 * - 数字の末尾にnをつける。
 * - number型とBigInt型は混在できない！（下記のexample参照）
 */
const number = 5;
const bigInt = 5n;
/**
 * @example console.log(number + bigInt);
 * TypeError: Cannot mix BigInt and other types, use explicit conversions
 */

/**
 * 真偽値(Boolean)
 */
const isTrue = true;
if (isTrue) {
	console.log('真偽値はtrueです');
}

/**
 * nullとundefined
 */
const nullValue = null;
console.log('nullは値がないこと: ' + nullValue);
console.log('nullの型: ' + typeof nullValue);

let undefinedValue; // ←ここ注目、値を代入していない。
console.log('undefinedは値が未定義であること: ' + undefinedValue);
console.log('undefinedの型: ' + typeof undefinedValue);
