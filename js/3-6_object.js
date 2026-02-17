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
