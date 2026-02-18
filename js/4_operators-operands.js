export {};

/**
 * 演算子の優先順位
 * - 最強：()
 * - 最弱：カンマ（→!?)
 *   - 実はカンマは「左から順に評価して、最後の値を返す」演算子
 *   - 配列や引数のカンマは演算子ではなくただの区切り
 */

/**
 * 算術演算子は() < *,/ < +,- の順で優先される。（算数のルールと同じ）
 * - インクリメント、デクリメントだけ注意
 */
console.log('---インクリメント---');
let a = 1;
let b = 1;
console.log(a++); // 1（後置なので、aの値が返された後にaの値が1増える）
console.log(++b); // 2（前置なので、bの値が1増えた後にbの値が返される）

console.log('---デクリメント---');
let c = 1;
let d = 1;
console.log(c--); // 1（後置なので、cの値が返された後にcの値が1減る）
console.log(--d); // 0（前置なので、dの値が1減った後にdの値が返される）

/**
 * 等価演算子
 * - 戻り値はBoolean型（trueかfalse）
 *
 *   - ===は型変換を行わないため、異なる型の値は等しくないと判断される。
 * - 例：0 == '0'はtrueだが、0 === '0'はfalse。
 */

/**
 * @example ==(等価)
 * - ==は型変換を行うため、異なる型の値でも等しいと判断されることがある。
 * - JS初期ではバリデーションチェックでの利用を想定しており、便利だと考えられていた。
 * 　- 例）年齢をフォームに数字入力しても全て文字列として扱われる。
 */
console.log('---等価演算子（==）---');
console.log(0 == '0'); // true
console.log(0 == false); // true
console.log('' == false); // true

/**
 * @example ===(厳密等価)
 * - ===は型変換を行わないため、異なる型の値は等しくないと判断される。
 */
console.log('---厳密等価演算子（===）---');
console.log(0 === '0'); // false
console.log(0 === false); // false
console.log('' === false); // false

/**
 * オブジェクトの比較
 * - オブジェクトは非プリミティブ型（オブジェクト型）で、格納先のアドレス同士で比較する。
 */
console.log('---オブジェクトの比較---');
const obj1 = { name: 'Taro' };
const obj2 = { name: 'Taro' };
console.log(obj1 === obj2); // 内容も型も同じだけどfalse

/**
 * 関係演算子
 * - true
 * - false
 */
console.log('---関係演算子---');
console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(1 <= 2); // true
console.log(1 >= 2); // false
console.log('val' in { val: 1 }); // true（オブジェクトのプロパティ名にvalがあるかどうか）
console.log('noVal' in { val: 1 }); // false（オブジェクトのプロパティ名にvalがない）

/**
 * 代入演算子
 */
console.log('---代入演算子---');
let x = 1;
let y;
let z = (y = 0);
console.log(z);

/**
 * 自己代入演算子
 * - 以下の3行は同じ意味（xに1を足してxに代入する）
 */
x = x + 1;
x += 1;
++x;

/**
 * 論理演算子
 * - && (AND)
 * - || (OR)
 * - !  (NOT)
 * - NAND、NOR、XORは上記を組み合わせて使う。
 * -
 * - &&(AND)はオペランドの途中でfalse(falsy)な値が見つかった場合、処理を中止しfalseを返す（短絡評価）
 * @example false && true // false（右のtrueは評価されない）
 *
 * - ||(OR)はオペランドの途中でtrue(truthy)な値が見つかった場合、処理を中止しtrueを返す（短絡評価）
 * @example true || false // true（右のfalseは評価されない）
 */
console.log('---論理演算子---');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!(true && true)); // false(NAND)
console.log(!(true || true)); // false(NOR)
console.log((true && !true) || (!true && true)); // false(XOR)

/**
 * falsy, truthy
 * - Boolean関数で値を真偽値に変換したとき、以下のように呼ぶ。
 *   - falsy（偽とみなされる値）
 *   - truthy（真とみなされる値）
 */
console.log('---falsy, truthy---');
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(false)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(1)); // true

/**
 * 単項演算子
 * - delete、typeof、!、+、-など（詳細は本参照）
 * 三項演算子
 * @example [条件式] ? [式1] : [式2]
 */
console.log('---三項演算子---');
1 === 1 ? console.log('true') : console.log('false'); // true

/**
 * Null合体演算子（??）
 * - 左オペランドがnullまたはundefinedの場合、右オペランドを返す。
 * - それ以外の場合は左オペランドを返す。
 */
console.log('---Null合体演算子---');
const valNull = null;
const result1 = valNull && 'default';
console.log(result1); // 'null'
const result2 = valNull ?? 'default';
console.log(result2); // 'default'

/**
 * オプショナルチェイニング演算子（?.）
 * - オブジェクトのプロパティや関数の呼び出しの際に、途中のオブジェクトがnullまたはundefinedの場合にエラーを防ぐための演算子。
 * - 例えば、obj?.propは、objがnullまたはundefinedでない場合にobj.propを返し、そうでない場合はundefinedを返す。
 * @example if (user && user.profile && user.profile.name) {} と
 *          user?.profile?.name は等価
 */
