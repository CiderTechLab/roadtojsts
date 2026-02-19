/**
 * ========================================
 * The Basics - TSの基本的な概念
 * ========================================
 *
 * 【この章で学ぶこと】
 * - ポイント1
 * - ポイント2
 * - ポイント3
 *
 * 【なぜ重要か】
 * この機能の目的と実務での使いどころ
 *
 * 【前提知識】
 * この章を理解するために必要な知識
 */
/**
 * セクションタイトル
 *
 * 【説明】
 * 概念の説明を自分の言葉で
 *
 * 【構文】
 * // 基本的な書き方
 *
 * 【使用例】
 * どんな時に使うか
 *
 * 【注意点】
 * よくある間違いやハマりどころ
 */
// 実際のコード例1
// const example1: Type = value;
// 実際のコード例2
// function example2(): ReturnType {
//   // implementation
// }
/**
 * 【エラー例】
 * よくあるエラーとその原因
 */
// const errorExample = "意図的なエラー例";
// errorExample.nonExistentMethod(); // エラー！
/**
 * 【ベストプラクティス】
 * - このような場合はこう書く
 * - 避けるべきパターン
 */
/**
 * ========================================
 * 実践問題
 * ========================================
 *
 * 実践問題：学んだ内容を使って以下を実装してみよう
 *
 * 問題：〇〇を実装する
 *
 * 要件：
 * - 要件1
 * - 要件2
 */
// 実装コード
/**
 * @remarks
 * - ECMAScriptには、スクリプトとモジュールという2つの概念がある。
 * - モジュールではimportとexportが使える。
 * - export {};では何もimportとexportもしない。
 *   が、**モジュールとして扱う**ことができるようになる。
 * - それにより、別ファイルと関数名が競合してエラーになることを防いだりできる。
 */
/**
 * @example <caption>型エラー（関数呼び出し）</caption>
 * message();
 *
 * @remarks
 * ERROR_MESSAGE:ts(2349)
 * この式は呼び出し可能ではありません。
 * 型 'String' には呼び出しシグネチャがありません。
 *
 * - 呼び出しシグネチャ：「引数をどう受け取って、何を返すか」
 * - TypeScript（JavaScript）では、関数もオブジェクト。
 */
const message = "Hello World!";
console.log(message.toLowerCase());
/**
 * @example <caption>型エラー</caption>
 * user.location;
 *
 * @remarks
 * ERROR_MESSAGE:ts(2339)
 * プロパティ 'location' は型 '{ name: string; age: number; }' に存在しません。
 *
 * - JSではundefinedで返すところをTSではエラーとして出力してくれる。
 */
const user = {
    name: "Daniel",
    age: 26,
};
console.log(`My name is ${user.name} and I am ${user.age} years old.`);
/**
 * @example <caption>Typoエラー</caption>
 * announcement.toLocaleLowercase();
 * announcement.toLocalLowerCase();
 *
 * @remarks
 * ERROR_MESSAGE:ts(2551)
 * プロパティ 'toLocaleLowercase' は型 '"Hello World!"' に存在していません。
 * 'toLocaleLowerCase' ですか?
 * プロパティ 'toLocalLowerCase' は型 '"Hello World!"' に存在していません。
 * 'toLocaleLowerCase' ですか?
 *
 * - TSではTypoもエラーとして出力、推測してくれる。
 * - 他にも呼び出されていない関数、論理エラーも出力してくれる。
 */
const announcement = "Hello World!";
console.log(announcement.toLocaleLowerCase());
/**
 *
 * @param person {string}
 * @param date {Date}
 *
 * @remarks
 * - 当初、関数の実装が重複しています。ts(2393)エラーが出現。
 * - export{};をファイル上部に記入し、解決。（詳細は上部）
 */
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
export {};
/**
 * ========================================
 * 学習メモ
 * ========================================
 *
 * 【理解できたこと】
 * - スクリプトとモジュールという概念があることを理解できた。
 *
 * 【まだ理解できていないこと】
 * - スクリプトとモジュールを実際に扱ってないので、扱いたい。
 *
 * 【関連トピック】
 * - 型、制御構文、
 *
 * 【実務での応用】
 * - コンポーネント化（またはそれに近い概念）に役立ちそう。
 */ 
