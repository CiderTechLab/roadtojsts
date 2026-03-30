/**
 * MEMO: export{}文
 * - モジュールとして認識させるためのexport文
 * - ただし、JavaScriptでは実行順は関係ないのでコンパイル後のソースコードでは文末に
 *   出力されることがある。
 */
export {};

/**
 * ユニオン型
 */
function unionTypeExample(val: string | number): void {
	console.log('# ユニオン型');
	console.log(val); // Hello, TypeScript World!
	val = 1;
	console.log(val); // 1
}
unionTypeExample('Hello, TypeScript World!');

/**
 * 型の絞り込み
 */
function typeNarrowingExample(): void {
	console.log('# 型の絞り込み');
	let val: string | number;
	val = 'Hello, TypeScript World!';
	console.log(val.toUpperCase()); // Hello, TypeScript World!
	// console.log(val.toFixed()); // エラー: number型でないためtoFixed()は使えない
}
typeNarrowingExample();
