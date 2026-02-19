/**
 * 環境構築の確認
 *
 * Node.jsのインストール・バージョン確認
 * $ node --version
 * $ v24.12.0
 *
 * TypeScriptのインストール・バージョン確認
 * $ tsc --version
 * $ Version 5.0.2
 */
/**
 * 型推論が働く例
 * @type {number}
 */
// 型推論の例
let x = 1; // let x: number = 1;と同じ意味になる
x = 2; // OK
// NOTE: 型 'string' を型 'number' に割り当てることはできません。ts(2322)
// x = "hello"; 
/**
 * 型注釈が必要な例
 * @type {string}
 */
const num = "Do not number type";
console.log(num);
export {};
