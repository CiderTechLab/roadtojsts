/**
 * ユニオン型
 */
function unionTypeExample(val) {
    console.log('# ユニオン型');
    console.log(val); // Hello, TypeScript World!
    val = 1;
    console.log(val); // 1
}
unionTypeExample('Hello, TypeScript World!');
/**
 * 型の絞り込み
 */
function typeNarrowingExample() {
    console.log('# 型の絞り込み');
    let val;
    val = 'Hello, TypeScript World!';
    console.log(val.toUpperCase()); // Hello, TypeScript World!
    // console.log(val.toFixed()); // エラー: number型でないためtoFixed()は使えない
}
typeNarrowingExample();
export {};
