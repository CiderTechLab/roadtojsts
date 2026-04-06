export {};
/**
 * オブジェクト型
 */
/**
 * オブジェクト型の宣言
 */
function objType(): void {
	console.log('# オブジェクト型の宣言');
	let vegitable: {
		name: string;
		value: number;
	};
	vegitable = {
		name: 'トマト',
		value: 100,
	};
	console.log(vegitable);

	// vegitable = 'キャベツ';
	// ERROR: 型 'string' を型 '{ name: string; value: number; }' に割り当てることはできません。ts(2322)
}
objType();

/**
 * オブジェクト型のエイリアス
 */
function objTypeAlias(): void {
	console.log('# オブジェクト型のエイリアス');
	type Vegi = {
		name: string;
		value: number;
	};

	let vegitable: Vegi; // 変数vegitableに型Vegiを割り当てる

	vegitable = {
		name: 'きゅうり',
		value: 80,
	};
	console.log(vegitable);
}
objTypeAlias();

/**
 * 構造的型付け
 */
function structuralType(): void {
	console.log('# 構造的型付け');
	type firstName = {
		firstName: string;
	};
	type lastName = {
		lastName: string;
	};
	const fullName = {
		firstName: '山田',
		lastName: '太郎',
	};
	let first: firstName = fullName;
	let last: lastName = fullName;

	console.log(first + ' ' + last);
	// MEMO: +で文字連結すると暗黙的にtoString()が呼び出されるため、
	// [object Object]という文字列が出力される。

	console.log(first.firstName + ' ' + last.lastName);
	// MEMO: プロパティの値にアクセスすると文字列が出力できる。
}
structuralType();

/**
 * オブジェクト型のプロパティチェック
 * - オブジェクト型で複数のプロパティが割り当てられている場合、全てのプロパテ
 *   ィが必要になる。足りない場合はエラーになる。
 */
function usageCheck(): void {
	console.log('# 使われ方のチェック');

	// fullName型で宣言
	type fullName = {
		firstName: string;
		lastName: string;
	};

	const hasBoth: fullName = {
		firstName: '佐藤',
		lastName: '次郎',
	};
	console.log(hasBoth); // OK

	//const hasFirst: fullName = {
	//	firstName: '鈴木',
	//};
	// ERROR: 型 '{ firstName: string; }' を型 'fullName' に割り当てることは
	// できません。
	// プロパティ 'lastName' が型 'fullName' に存在しません。ts(2322)
}
usageCheck();

/**
 * オブジェクト型の過剰プロパティチェック
 * - オブジェクト型で宣言
 */
