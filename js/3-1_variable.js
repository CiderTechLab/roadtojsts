/**
 * @example export{};
 * - モジュール化するためのダミーコード
 * - これがないと、同じ変数名を定義した別のファイルと衝突する可能性がある。
 * - 同時にstrictモードも有効になる。
 */

export {};

console.log('Hello, JavaScript!');

let hello = 'Hello, JavaScript!';
let bye = 'Goodbye, JavaScript!';

console.log(hello);
console.log(hello);
console.log(bye);
