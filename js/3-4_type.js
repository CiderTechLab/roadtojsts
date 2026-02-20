export {};

/**
 * MEMO:
 * - JavaScriptのデータ型の特徴
 *   - 動的型付け言語（Dynamic Typing Language）
 *     - 変数にどんな型の値でも代入できる。
 *     - 例） let x = 42;
 *   - 変数に型はない。**値に型がある。**
 * -データ型一覧
 *   - プリミティブ型
 *     - String: 文字列
 *     - Number: 数値
 * 		 	 - JavaScriptでは、整数(Integer)も小数も(Float)も同じNumber型。
 *       - 2^53 - 1 = 9007199254740991が最大(Number.MAX_SAFE_INTEGER)
 *       - これ以降は、9007199254740991 = 9007199254740992でもOK・・・（誤差）
 *     - BigInt: 大きな整数（ES2020で追加された、任意の精度の整数を表すデータ型）
 *       - 任意精度整数。上限なし（→!?)でメモリが許す限り。
 *     - 少数は使えない。
 *     - Boolean: 真偽値
 *     - Null: null（値が空（存在しない）であることを表す）
 *       - null + 1 は 1;
 *     - Undefined: undefined（値が未定義であることを表す）
 * 		   - Undefined + 1 はNaN(Not a Number:非数)。
 *     - Symbol: シンボル（ES6で追加された、ユニークな識別子を表すデータ型）
 *   - オブジェクト型（非プリミティブ型）
 *     - Object: オブジェクト（複数の値をまとめて扱うためのデータ型）
 *
 * - Q. いや、こんなに型があるのに指定しないのは危なくない？
 * - A. そのためのTypeScript！ TSには静的型チェックがある。
 *
 */

/**
 * 文字列リテラル
 */
const text = 'Hello, JavaScript!';
const text2 = 'Hello, JavaScript!';
const geeting = 'Hello';
const text3 = `${geeting}, JavaScript!`;
console.log(text); // Hello, JavaScript!
console.log(text2); // Hello, JavaScript!
console.log(text3); // Hello, JavaScript!

/**
 * 数値リテラル
 * - IEEE 754という規格で定められているらしい。（他の言語も）
 */
const num = 42;
const num2 = 3.14;
const num3 = -0.001;
console.log(`整数${num}、小数${num2}、負の数${num3}`);
// 整数42、小数3.14、負の数-0.001
const num4 = 9007199254740992;
const num5 = 9007199254740993;
console.log('number型のMAX値で比較：' + (num4 === num5));
// true（誤差があるため、同じ値とみなされる）

/**
 * BigIntリテラル
 * - 末尾にnをつける
 */
const bigInt = 9007199254740992n;
const bitInt2 = 9007199254740993n;
console.log('BigInt型で比較：' + (bigInt === bitInt2));
// false（BigIntは任意精度の整数のため、正確に比較できる）

/**
 * nullリテラル
 * - 値が空
 * - 実はオブジェクト型（→!?)
 * - バグだったが、互換性のためにそのまま放置。実質仕様と化している。
 */
const nullValue = null;
console.log('nullリテラル：' + nullValue); // null
console.log('nullの型：' + typeof null); // object

/**
 * undefinedリテラル
 * - 値が未定義
 * - 変数が宣言されているが、値が割り当てられていない場合のデフォルト値。
 */
let undefinedValue;
console.log('undefinedリテラル：' + undefinedValue); // undefined
console.log('undefinedの型：' + typeof undefinedValue); // undefined

/**
 * 小実験：undefinedとnullの比較
 */
console.log('undefinedとnullの比較：' + (undefinedValue == null));
// true（==は型変換を行うため、undefinedとnullは等しいとみなされる）
console.log('undefinedとnullの厳密比較：' + (undefinedValue === null));
// false（===は型変換を行わないため、undefinedとnullは異なる値とみなされる）

/**
 * オブジェクトリテラル
 */
const obj = {
	name: 'watashi',
	age: 20,
	occupation: 'student',
};
console.log(
	`オブジェクトリテラル：私の名前は${obj.name}、年齢は${obj.age}、職業は${obj.occupation}です。`
);
// オブジェクトリテラル：私の名前はwatashi、年齢は20、職業はstudentです。

/**
 * 配列リテラル
 * - 0番目から順にインデックスが振られる。
 * - JavaScriptの配列は、実はオブジェクトの一種。(→!?)
 * - 数値キー付きの特殊オブジェクト。
 */
const array = [1, 2, 3, 4, 5, 'あ'];
console.log('配列リテラル：' + array[0]);
console.log('配列リテラル（文字列）：' + array[5]);

// Q. 5番目の要素は文字列なのに、なぜエラーにならないの？
// A. 動的型付け言語だから！配列の要素に異なる型の値を混在させることができる。

/**
 * 正規表現リテラル
 */
const regex = /[A-Za-z]+/g;
const str = 'Hello, JavaScript!';
const matches = str.match(regex);
console.log('正規表現リテラル：' + matches);
// 正規表現リテラル：Hello,JavaScript

/**
 * 関数リテラル
 */
const func = function () {
	console.log('Hello, Function!');
};
const func2 = () => {
	console.log('Hello, Arrow Function!');
};
func(); // Hello, Function!
func2(); // Hello, Arrow Function!
