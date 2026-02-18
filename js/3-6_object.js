export {};

/**
 * オブジェクト
 * @example
 * const [オブジェクト名] = {
 *   [プロパティ名]: [値],
 *   [プロパティ名]: [値]
 * };
 *
 * - このうち、{~}の部分をオブジェクトリテラルと呼ぶ。
 * - 配列はオブジェクト。オブジェクトは配列ではない。
 *
 * 組み込みオブジェクト
 * - JavaScriptがあらかじめ用意しているオブジェクトのこと。
 * @example console.log、window.alert
 */

const person = {
	name: { first: 'Taro', last: 'Yamada' },
	name2: { first: 'Hanako', last: 'Yamada' },
	age: 20,
	isStudent: true,
};

/**
 * ドット記法
 * @example [オブジェクト名].[プロパティ名]
 */
console.log('---以下はドット記法です---');
console.log(person.name); // { first: 'Taro', last: 'Yamada' }
console.log(person.name.first); // 'Taro'
console.log(person.name.last); // 'Yamada'

/**
 * ブラケット記法
 * @example [オブジェクト名]['プロパティ名']
 */
console.log('---以下はブラケット記法です---');
console.log(person['name']); // { first: 'Taro', last: 'Yamada' }
console.log(person['name']['first']); // 'Taro'
console.log(person['name']['last']); // 'Yamada'

console.log('---ブラケット記法では変数でもアクセスできます---');

const myoji = 'last';
console.log(person['name2'][myoji]); // 'Yamada'

/**
 * プロパティの削除
 */
console.log('---プロパティの削除でnameの苗字が消えました。---');
delete person.name.last;
console.log(person); // { name: { first: 'Taro' }, name2: { first: 'Hanako', last: 'Yamada' }, isStudent: true }

/**
 * メソッド
 * - オブジェクトに保持される関数のこと。
 */
console.log('---メソッド---');
const method = {
	wakeUp: function () {
		console.log('おはようございます！');
	},

	// ES6以降は、functionキーワードを省略してもOK。
	gotoSleep() {
		console.log('おやすみなさい！');
	},
};

method.wakeUp(); // おはようございます！
method.gotoSleep(); // おやすみなさい！

/**
 * シンボル
 * @example const [変数名] = Symbol([ラベル]);
 * - プリミティブ型
 * - ES6で追加された、オブジェクトのプロパティ名として使用できる新しいデータ型。
 * - 一意のラベル、プロパティの生成に使用される。
 *   - 内部の値が同じであれば比較してもtrueになる。
 * - 現場では・・・
 *   - あまり使用されない。TypeScriptもあるため。
 * 　- ただし、内部的には結構な頻度で使われているらしい。
 */
console.log('---シンボル型（値なし）---');
const s1 = Symbol();
const s2 = Symbol();

const obj = {
	[s1]: {},
	[s2]: {},
};
console.log(obj[s1] === obj[s2]); // false

console.log('---シンボル型（値あり）---');
const s3 = Symbol();
const s4 = Symbol();

const obj2 = {
	[s3]: 1,
	[s4]: 1,
};
console.log(obj2[s3] === obj2[s4]); // true
