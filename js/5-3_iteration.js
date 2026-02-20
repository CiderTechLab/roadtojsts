export {};

/**
 * while文
 * - 条件式がtrueの間、ブロック内の処理を繰り返す。
 * - while(true) {}で無限ループになるが、使いどころに注意。
 */
console.log('---while文---');
let i = 0;
while (i < 7) {
	console.log(i);
	i += 2;
}

/**
 * for文
 * - 初期化式、条件式、更新式を指定して繰り返し処理を行う。
 * - 初期化式はループ開始前に1回だけ実行される。
 * - 条件式がtrueの間、ブロック内の処理を繰り返す。
 * - 更新式はループの各反復の後に実行される。
 * - for(;;) {}で無限ループになるが、使いどころに注意。
 */
console.log('---for文---');
for (let i = 0; i < 10; i += 3) {
	console.log(i);
}

/**
 * 配列とfor文
 */
console.log('---配列とfor文---');
const array = [10, 20, 23, 47];

let j = 0;
for (let i = 0; i < array.length; i++) {
	j += array[i];
}
console.log(j);

/**
 * オブジェクトとfor文
 * - for...in文を使用。
 * - オブジェクトからキーを取り出す。
 * - 値を取りたい時はオブジェクト名[キー]
 */
console.log('---オブジェクトとfor文---');
const obj = {
	firstName: 'yamada',
	lastName: 'taro',
	age: '25',
};

for (const key in obj) {
	console.log(key + ':' + obj[key]);
}
