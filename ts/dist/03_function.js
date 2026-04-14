/**
 * 関数
 * @author S.K
 */
/**
 * 関数のパラメーター
 * - TypeScriptでは関数の引数に型を指定することができる。
 * - 引数に型を指定しないと暗黙的にany型と推論される。
 */
function greeting(langage) {
    console.log(`---関数のパラメーター---`);
    console.log(`Hello, ${langage} world!`);
}
greeting('TypeScript');
/**
 * 関数のオプションパラメーター
 * - 関数の引数に?を付けると、その引数はオプションパラメーターになる。
 * - オプションパラメーターは省略可能であり、省略した場合はundefinedになる。
 * - オプションパラメーターは必須パラメーターの後に配置する必要があり、必須パラメータ
 *   ーの前に配置することはできない。SyntaxErrorになる。
 */
function greetingWithOption(langage, name) {
    console.log(`---関数のオプションパラメーター---`);
    console.log(`Hello ${name}!, ${langage} world!`);
}
greetingWithOption('TypeScript');
greetingWithOption('TypeScript', 'S.K');
/**
 * 関数のデフォルトパラメーター
 * - 関数の引数に=を付けて初期値を指定すると、その引数はデフォルトパラメーターになる。
 * - デフォルトパラメーターは省略可能であり、省略した場合は初期値が使用される。
 */
function greetingWithDefault(langage, name = 'Guest') {
    console.log(`---関数のデフォルトパラメーター---`);
    console.log(`Hello ${name}!, ${langage} world!`);
}
greetingWithDefault('TypeScript');
greetingWithDefault('TypeScript', 'S.K');
/**
 * 関数のレストパラメーター
 * - 関数の引数に...を付けると、その引数はレストパラメーターになる。
 * - レストパラメーターは複数の引数を1つの配列として受け取ることができる。
 */
function lestParameter(...number) {
    console.log(`---関数のレストパラメーター---`);
    console.log(number);
}
lestParameter(1, 2, 3, 4, 5);
/**
 * 関数の戻り値の型
 * - 関数の戻り値の型を指定することができる。
 * - 戻り値の型を指定しないと暗黙的にany型と推論される。
 */
function rerurnType(langage) {
    console.log(`---関数の戻り値の型---`);
    return `Hello, ${langage} world!`;
}
console.log(rerurnType('TypeScript'));
export {};
