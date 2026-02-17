export {};

/**
 * 変数の再代入
 */
let text = 'Hello, JavaScript!';
console.log(text); // Hello, JavaScript!

text = 'Good bye, JavaScript!';
console.log(text); // Good bye, JavaScript!

/**
 * 変数のコピー
 */
let comment = text;
console.log(comment); // Good bye, JavaScript!

/**
 * コピー先に代入
 */
comment = 'Hello again, JavaScript!';
console.log(comment); // Hello again, JavaScript!

/**
 * 定数
 * @link https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
 */
const PI = 3.14;
PI = 3; // TypeError: Assignment to constant variable.（定数代入エラー）
console.log(PI); // 3.14

/**
 * MEMO: var、let、constの違いまとめ
 * - var
 *   - 関数スコープ
 *   - 再代入可
 *   - 再宣言可
 *   - 巻き上げ（ホイスティング）される。
 * - let
 *   - ブロックスコープ
 *   - 再代入可
 *   - 再宣言不可
 * 　- 巻き上げ（ホイスティング）されない。
 * - const
 *   - ブロックスコープ
 *   - 再代入不可
 *   - 再宣言不可
 *   - 巻き上げ（ホイスティング）されない。
 *   - 初期値が必須。
 *     - 無いと「SyntaxError: Missing initializer in const declaration」
 *
 */
