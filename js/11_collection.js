export {};
/**
 * コレクション
 * - ～ESS: Object, Array
 * - ES6～: Map, Set, WeakMap, WeakSet（追加された)
 */
/**
 * 配列
 * - empty: 空の
 * 操作	    動き  意味
 * ---------------------
 * push	    後ろに追加
 * pop	    後ろから取り出す
 * shift	  前から取り出す
 * unshift	前に追加
 * splice   要素の切り取り（開始位置から特定の長さ分切り取り）: 接合する、継ぐ
 * concat   配列の結合、複製
 *
 * - 配列の増減（破壊的操作）
 * - 配列の増減（非破壊操作）
 * - 配列の調査
 *   - indexOf: 完全一致
 * メソッド      検索方法
 * ---------------------
 * indexOf()	  完全一致
 * includes()	  完全一致（true/false）
 * find()	      条件検索
 * findIndex()	条件検索（index）
 */
console.log('---配列---');
const salad = ['cabbage', 'lettuce', 'tomato', 'carrot'];
console.log(salad);
console.log(salad[0]);
salad[0] = 'cucumber';
console.log('配列[0]をcucumberに変更');
console.log(salad);

const emptyArr = new Array(3);
console.log(emptyArr);

const filledArr = new Array(1, 2, 3);
console.log(filledArr);

/**
 * 配列の操作
 */
console.log('---配列の操作---');
const player = ['ohtani', 'suzuki', 'kondo'];
console.log(player);
console.log('.push');
player.push('yoshida');
console.log(player);

console.log('.pop');
player.pop();
console.log(player);

console.log('.shift');
player.shift();
console.log(player);

console.log('.unshift');
player.unshift('syuto');
console.log(player);

console.log('.splice()');
player.splice(1, 2);
console.log(player);

console.log('.concat（結合)');
const newPlayer = player.concat(['suzuki', 'kondo']);
console.log(newPlayer);

console.log('.concat（複製）');
player.concat();
console.log(newPlayer);

console.log('.slice');
const arterPlayer = newPlayer.slice(1, 2);
console.log(arterPlayer);
console.log(newPlayer);

console.log('---配列の調査---');
console.log('.indexOf');
const menber = ['ohtani', 'suzuki', 'kondo'];
console.log(menber.indexOf('suzuki'));

console.log('.includes');
console.log(menber.includes('ohtani'));

console.log('---配列（要素）の結合---');
console.log('.join');
console.log(menber.join('/'));

console.log('---要素を埋める---');
console.log('.fill');
console.log(new Array(10).fill(7));

console.log('---多次元配列の平坦化---');
console.log('.flat');
const threeD = [1, [2], 3, [4, [5]]];
console.log(threeD);
console.log(threeD.flat());
console.log(threeD.flat(2));

console.log('---要素の逆転---');
console.log('.reverse');
console.log(menber);
console.log(menber.reverse());

/**
 * forEachメソッド
 * - 配列の各要素を使って繰り返し処理を行う
 */
console.log('---forEachメソッド---');
const numbers = [1, 2, 3];
numbers.forEach((value, index, array) => console.log(value, index, array));

/**
 * mapメソッド
 * - コールバック関数の戻り値を要素に取る新しい配列を返す。
 */
console.log('---mapメソッド---');
const mapArray = [1, 2, 3];
function multiply3(val) {
	return val * 3;
}
console.log(mapArray.map(multiply3));

/**
 * filterメソッド
 * - コールバック関数の条件がtrueの時、trueの配列の要素のみを保持する新しい配列
 * を作成。
 */
console.log('---filterメソッド---');
const filterArray = [1, 2, 3];
function greaterThan2(val) {
	return val > 2;
}
console.log(filterArray.filter(greaterThan2));

/**
 * everyメソッド
 * - すべての関数がコールバック関数で実装された条件でtrueになるかどうかチェッ
 *   ク。
 * - すべての条件一致でtrue、それ以外はfalse
 */
console.log('---everyメソッド---');
const everyArray = [1, 2, 3];
console.log(everyArray.every((value) => value > 0));
console.log(everyArray.every((value, index) => index > 0));
console.log(0 > 0);

/**
 * someメソッド
 * - 少なくとも一つの関数がコールバック関数で実装された条件でtrueになるかどうか
 * 　チェック。
 * - 一つでも条件一致でtrue、それ以外はfalse
 */
console.log('---someメソッド---');
const someArray = [1, 2, 3];
console.log(someArray.some((value) => value > 0));
console.log(someArray.some((value, index) => index > 0));
console.log(0 > 0);

/**
 * findメソッド
 * - コールバック関数の条件を満たした最初の値を返す。
 */
function findMethod() {
	console.log('---findメソッド---');
	const findArray = [1, 2, 3];

	console.log(findArray.find((value) => value > 0));
	console.log(findArray.find((value, index) => index > 0));
}
findMethod();

/**
 * sortメソッド
 * - 要素の順番を並び替える
 * - 昇順の場合、文字より数字が先に来る。
 *  （数字は一旦文字列に変換されて並び替えされる）
 */
function sortMethod() {
	console.log('---sortメソッド---');
	const sortArray = ['c', 'd', 'a', 'b', 3, 1, 2];
	console.log(sortArray.sort());
}
sortMethod();

function numSort() {
	console.log('--数字のソート--');
	const numSortArray = [4, 9, 2, 5, 6];
	console.log(numSortArray.sort((a, b) => a - b));
}
numSort();

/**
 * reduceメソッド
 * - 配列をループして各要素の値から単一の出力値を生成
 */
console.log('---reduceメソッド---');
function reduceMethod(totalVal, currentVal) {
	return totalVal + currentVal;
}
const reduceArray = [1, 2, 3];
console.log(reduceArray.reduce(reduceMethod));
