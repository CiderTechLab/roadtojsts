# 実践問題：The Basics

**対応学習日:** Day 3-4  
**参考資料:** [TypeScript Handbook - The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)  
**難易度:** ⭐⭐初級〜中級

---

## 問題の目的

TypeScriptの基礎となる静的型チェック、コンパイラの動作、厳格性設定について理解を深めることを目的としています。

---

## 問題1: 静的型チェックの理解

### 問題文

以下のコードのうち、TypeScriptが**コンパイル時にエラーを検出できるもの**をすべて選んでください。

**コードA:**
```typescript
const message = "hello";
message.toUppercase();
```

**コードB:**
```typescript
const user = { name: "Alice", age: 30 };
console.log(user.nama);
```

**コードC:**
```typescript
function divide(a: number, b: number): number {
  return a / b;
}
divide(10, 0);
```

**コードD:**
```typescript
const numbers = [1, 2, 3];
console.log(numbers[10]);
```

---

## 問題2: Explicit Types（明示的な型）

### 問題文

以下のコードに適切な型アノテーションを追加してください。型推論に頼らず、すべての変数と関数に明示的に型を指定してください。

```typescript
function processUser(user) {
  const fullName = user.firstName + " " + user.lastName;
  const currentYear = new Date().getFullYear();
  const age = currentYear - user.birthYear;
  
  return {
    name: fullName,
    age: age,
    isAdult: age >= 18
  };
}

const user = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 2000
};

const result = processUser(user);
console.log(result);
```

**要件:**
- すべての変数に型アノテーションを追加
- 関数の引数と戻り値に型を明示
- 必要に応じてinterfaceまたはtype aliasを定義

---

## 問題3: Strictness（厳格性）の理解

### 問題文

以下のコードは `strict: false` では動作しますが、`strict: true` ではエラーになります。

```typescript
function greet(name) {
  return "Hello, " + name.toUpperCase();
}

const result = greet(null);
console.log(result);
```

**質問:**
1. `strict: true` でどのようなエラーが発生しますか？
2. `strict` モードが含む主な設定項目を3つ挙げてください
3. このコードを `strict: true` でも動作するように修正してください

---

## 問題4: Downleveling（ダウンレベリング）

### 問題文

以下のTypeScriptコードがあります。

```typescript
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("TypeScript"));
```

**質問:**
1. このコードを `target: "ES5"` でコンパイルした場合、どのような変換が行われますか？
2. `target: "ES2015"` と `target: "ES5"` の違いを説明してください
3. アロー関数とテンプレートリテラルはそれぞれES5でどのように変換されますか？

---

## 問題5: 型の消去（Erased Types）

### 問題文

以下のTypeScriptコードをコンパイルして、生成されるJavaScriptコードを予想してください。

```typescript
interface User {
  name: string;
  age: number;
}

function printUser(user: User): void {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const myUser: User = {
  name: "Alice",
  age: 25
};

printUser(myUser);
```

**質問:**
1. コンパイル後のJavaScriptコードはどうなりますか？
2. `interface User` はJavaScriptに残りますか？
3. なぜTypeScriptの型情報はコンパイル後に消えるのですか？

---

## 問題6: 実践課題 - 型安全な計算機

### 問題文

四則演算を行う計算機を作成してください。

**要件:**
1. 以下の演算をサポート: 加算、減算、乗算、除算
2. 演算子は文字列リテラル型で定義
3. 不正な演算子の場合はエラーメッセージを返す
4. 0での除算を検出してエラーメッセージを返す
5. すべての関数と変数に明示的な型を付ける
6. strict モードで動作すること

**ファイル名:** `calculator.ts`

**期待する動作:**
```typescript
calculate(10, 5, "add")      // 15
calculate(10, 5, "subtract") // 5
calculate(10, 5, "multiply") // 50
calculate(10, 5, "divide")   // 2
calculate(10, 0, "divide")   // "Error: Division by zero"
calculate(10, 5, "power")    // "Error: Invalid operator"
```

---

## 問題7: Non-exception Failures

### 問題文

JavaScriptでは実行時エラーにならないが、TypeScriptがコンパイル時にエラーとして検出できる例を3つ作成してください。

**要件:**
- 実際に動作するコード例を書く
- それぞれなぜTypeScriptがエラーを検出できるか説明する
- JavaScriptではどのような問題が発生するか説明する

---

## ヒント

### 問題1のヒント
- メソッド名のスペルミスに注目
- 存在しないプロパティへのアクセスに注目
- 実行時エラーとコンパイル時エラーの違いを考える

### 問題2のヒント
- `interface` を使ってオブジェクトの形を定義する
- 関数の戻り値も明示的にオブジェクト型を定義する
- `new Date()` は `Date` 型です

### 問題3のヒント
- `noImplicitAny` について調べる
- `strictNullChecks` について調べる
- null チェックを追加する

### 問題4のヒント
- TypeScript Playground で実際に試してみる
- アロー関数は通常の関数に変換される
- テンプレートリテラルは文字列連結に変換される

### 問題5のヒント
- `tsc` コマンドでコンパイルして確認する
- 型アノテーションとinterfaceは出力されない
- 実行時には型情報は不要

### 問題6のヒント
- Literal Types を使って演算子を定義: `"add" | "subtract" | ...`
- Union型を使って戻り値を `number | string` にする
- 条件分岐で演算子をチェック

### 問題7のヒント
- プロパティのタイポ
- 関数の引数の数の違い
- 配列のメソッドの誤用

---

## 次のステップ

これらの問題を解き終えたら、[正答と解説ページ](./Answer_Practice_The_Basics.md)で答え合わせをしましょう。

理解が不十分な箇所があれば、[Learning_Plan](./Learning_Plan)に戻って復習することをお勧めします。
