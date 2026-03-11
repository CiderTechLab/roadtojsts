export {};
/**
 * Setコレクション
 * - ES6で追加された
 * - 各メソッドは破壊的操作になる
 */
function makeSetObj() {
	console.log('---Setコレクション---');
	const convSet = new Set([1, 2, 3]);
	// Set(3) { 1, 2, 3 } ← Node.js環境下では配列の数も表示。Chromeも。
	console.log(convSet);
}
makeSetObj();

/**
 * addメソッド
 * - Setオブジェクトに値を追加できる。
 * - プリミティブ型、オブジェクト型に関わらず、どの型でも追加できる。
 */
console.log('---初期sadal一覧---');
let salad = new Set(['cabbage', 'tomato', 'carrot']);
console.log(salad);

function addSet() {
	console.log('---addメソッド---');
	salad.add('cucumber');
	console.log(salad);
}
addSet();

/**
 * deleteメソッド
 * - Setオブジェクトから値を削除できる。
 */
function delSet() {
	console.log('---deleteメソッド---');
	salad.delete('tomato');
	console.log(salad);
}
delSet();

/**
 * clearメソッド
 * - Setオブジェクトの値を全て削除
 */
function clrSet() {
	console.log('---clearメソッド---');
	salad.clear();
	console.log(salad);
}
clrSet();

console.log('---clear()されたのでsalad再定義---');
salad = new Set(['cabbage', 'tomato', 'carrot']);
console.log(salad);

/**
 * hasメソッド
 * - Setオブジェクト内に一致する値が存在するか確認
 */
function hasSet() {
	console.log('---hasメソッド---');
	console.log(salad.has('cabbage'));
}
hasSet();

/**
 * forEachメソッド
 * - Q.引数がval、sameValで同じ値なのはおかしくない？
 * - A.例えば一つ目の引数にキー、二つ目の引数にバリューを代入ということをしたい
 *   ため。
 */
function forEachSet() {
	console.log('---forEachメソッド---');
	salad.forEach((val, sameVal, item) => {
		console.log(`${val}, ${sameVal}, ${item}`);
	});
	console.log(salad);
}
forEachSet();

/**
 * sizeメソッド
 * - Setオブジェクトの長さ（要素数）を確認
 */
function sizeSet() {
	console.log('---sizeメソッド---');
	console.log(salad.size);
}
sizeSet();
