export {};

/**
 * MEMO:
 * - 動的型付け
 *  - 例）JavaScript、Python（強い動的型付け）、Ruby（強い動的型付け）
 *  - 変数の型を宣言する必要がない。
 *  - 変数に代入される値によって型が決まる。
 *  - 実行時に型が決まる。
 * - 静的型付け
 *  - 例）TypeScript、Java、C#
 *  - 変数の型を宣言する必要がある。
 *    - ただし、最近はJavaやC#でもvar、let、constを使用することが推奨されている。
 *  - 実行前に型が決まる。
 *    - コンパイル時に型推論するので。
 * - Q. じゃあ静的型付けの方がパフォーマンス良いじゃん。
 * - A. そうとも限らない。例えば、JS/TSはV8エンジンで、JavaはJVMの比較になってしまい、アーキテクチャ次第になってしまう。傾向としては間違いではないが、正解でもない。
 */

/**
 * データ型の確認
 * @example typeof [値]
 */
console.log('---データ型の確認---');
console.log('string: ' + typeof 'Hello'); // string
console.log('number: ' + typeof 123); // number
console.log('bigint: ' + typeof 123n); // bigint
console.log('boolean: ' + typeof true); // boolean
console.log('null: ' + typeof ''); // nullはobject
console.log('undefined: ' + typeof undefined); // undefined
console.log('object: ' + typeof {}); // object
console.log('symbol: ' + typeof Symbol()); // symbol

/**
 * 暗黙的な型変換
 * - 加算演算子(+)は数値と文字列が混在した場合、数値を文字列に暗黙的に型変換する。
 * - 減算演算子(-)は数値と文字列が混在した場合、文字列を数値に暗黙的に型変換する。
 * - 乗算演算子(*)は数値と文字列が混在した場合、文字列を数値に暗黙的に型変換する。
 * - 除算演算子(/)は数値と文字列が混在した場合、文字列を数値に暗黙的に型変換する。
 */
console.log('---暗黙的な型変換---');
console.log(1 + '1'); // "11"（数値が文字列に変換される　→　暗黙的な型変換）
console.log(1 - '1'); // 0（文字列が数値に変換される　→　暗黙的な型変換）
console.log(1 * '2'); // 2（文字列が数値に変換される　→　暗黙的な型変換）
console.log(1 / '2'); // 0.5（文字列が数値に変換される　→　暗黙的な型変換）

/**
 * 明示的な型変換（キャスト）
 */
console.log('---明示的な型変換---');
console.log(1 + Number('1')); // 2（文字列が数値に変換される　→　明示的な型変換）
