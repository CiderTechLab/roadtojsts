# 正答と解説：The Basics

**対応学習日:** Day 3-4  
**参考資料:** [TypeScript Handbook - The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

---

## 問題1の正答と解説

### 正答
**A と B がコンパイル時にエラーを検出できる**

### 解説

**コードA: メソッド名のスペルミス** ✅ エラー検出可能
```typescript
const message = "hello";
message.toUppercase(); // エラー！正しくは toLowerCase()
```
- TypeScriptは `string` 型に `toUppercase` メソッドが存在しないことを検出
- 正しいメソッド名は `toUpperCase()` (Cが大文字)
- エラーメッセージ: `Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?`

**コードB: 存在しないプロパティ** ✅ エラー検出可能
```typescript
const user = { name: "Alice", age: 30 };
console.log(user.nama); // エラー！正しくは name
```
- TypeScriptは `user` オブジェクトに `nama` プロパティが存在しないことを検出
- 正しいプロパティ名は `name`
- エラーメッセージ: `Property 'nama' does not exist on type '{ name: string; age: number; }'. Did you mean 'name'?`

**コードC: ゼロ除算** ❌ エラー検出不可
```typescript
function divide(a: number, b: number): number {
  return a / b;
}
divide(10, 0); // エラーにならない
```
- これは**実行時**の問題であり、型の問題ではない
- TypeScriptは文法的には正しいため、エラーを出さない
- JavaScriptでは `10 / 0` は `Infinity` を返す

**コードD: 配列の範囲外アクセス** ❌ エラー検出不可
```typescript
const numbers = [1, 2, 3];
console.log(numbers[10]); // エラーにならない、実行すると undefined
```
- これも**実行時**の問題
- TypeScriptは配列の長さをチェックしない
- `undefined` が返されるが、コンパイルエラーにはならない

### 重要なポイント

TypeScriptが検出できるのは：
- ✅ 型の不一致
- ✅ 存在しないプロパティやメソッドへのアクセス
- ✅ 構文エラー

TypeScriptが検出できないのは：
- ❌ 実行時のロジックエラー（ゼロ除算など）
- ❌ 配列の範囲外アクセス
- ❌ null/undefined チェック（strictNullChecks が無効の場合）

---

## 問題2の正答と解説

### 正答

```typescript
// ユーザーの入力データの型定義
interface UserInput {
  firstName: string;
  lastName: string;
  birthYear: number;
}

// 関数の戻り値の型定義
interface ProcessedUser {
  name: string;
  age: number;
  isAdult: boolean;
}

function processUser(user: UserInput): ProcessedUser {
  const fullName: string = user.firstName + " " + user.lastName;
  const currentYear: number = new Date().getFullYear();
  const age: number = currentYear - user.birthYear;
  
  return {
    name: fullName,
    age: age,
    isAdult: age >= 18
  };
}

const user: UserInput = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 2000
};

const result: ProcessedUser = processUser(user);
console.log(result);
```

### 解説

**ポイント1: Interface の定義**
```typescript
interface UserInput {
  firstName: string;
  lastName: string;
  birthYear: number;
}
```
- オブジェクトの形を定義する
- 再利用可能で、型の意図が明確になる

**ポイント2: 関数シグネチャ**
```typescript
function processUser(user: UserInput): ProcessedUser
```
- 引数の型: `UserInput`
- 戻り値の型: `ProcessedUser`
- 関数を見ただけで入出力が明確

**ポイント3: 変数の型アノテーション**
```typescript
const fullName: string = ...
const currentYear: number = ...
const age: number = ...
```
- 各変数に明示的に型を付ける
- 型推論に頼らない書き方

**Type Alias を使った別解:**
```typescript
type UserInput = {
  firstName: string;
  lastName: string;
  birthYear: number;
};

type ProcessedUser = {
  name: string;
  age: number;
  isAdult: boolean;
};
```
- `interface` の代わりに `type` も使える
- この場合はどちらを使っても問題ない

---

## 問題3の正答と解説

### 質問1の正答: strict: true でのエラー

**発生するエラー:**
1. `Parameter 'name' implicitly has an 'any' type.`
   - 引数 `name` に型が指定されていない

2. `Object is possibly 'null'.`
   - `null` が渡される可能性があるのに、`toUpperCase()` を呼んでいる

### 質問2の正答: strict モードの主な設定

1. **`noImplicitAny`**
   - 暗黙の `any` 型を禁止
   - すべての変数に明示的な型が必要

2. **`strictNullChecks`**
   - `null` と `undefined` を明示的にチェック
   - `number` 型の変数に `null` を代入できない

3. **`strictFunctionTypes`**
   - 関数の引数の型チェックを厳格に
   - より安全な関数の型チェック

その他: `strictBindCallApply`, `strictPropertyInitialization`, `noImplicitThis`, `alwaysStrict`

### 質問3の正答: 修正したコード

**修正版1: null チェックを追加**
```typescript
function greet(name: string | null): string {
  if (name === null) {
    return "Hello, Guest";
  }
  return "Hello, " + name.toUpperCase();
}

const result: string = greet(null);
console.log(result); // "Hello, Guest"
```

**修正版2: Non-null assertion (推奨しない)**
```typescript
function greet(name: string | null): string {
  return "Hello, " + name!.toUpperCase(); // ! で null じゃないと断言
}
```
- `!` を使うと null チェックをスキップ
- 実行時エラーのリスクがあるため推奨しない

**修正版3: Optional Chaining**
```typescript
function greet(name: string | null): string {
  return "Hello, " + (name?.toUpperCase() ?? "Guest");
}
```
- `?.` で安全にメソッド呼び出し
- `??` で null の場合のデフォルト値を指定

### 解説

**strict モードの重要性:**
- バグを早期に発見できる
- コードの品質が向上する
- 新規プロジェクトでは必ず有効にすべき
- レガシーコードの移行では段階的に有効化

---

## 問題4の正答と解説

### 質問1の正答: ES5 へのコンパイル結果

```javascript
var greet = function (name) {
    return "Hello, " + name + "!";
};
console.log(greet("TypeScript"));
```

### 質問2の正答: target の違い

**ES2015 (ES6) の特徴:**
- アロー関数がそのまま残る
- `const`, `let` がそのまま使える
- テンプレートリテラルがそのまま使える
- クラス構文が使える

**ES5 の特徴:**
- アロー関数が通常の関数に変換される
- `const`, `let` が `var` に変換される
- テンプレートリテラルが文字列連結に変換される
- クラスが関数とプロトタイプに変換される

### 質問3の正答: 個別の変換

**アロー関数の変換:**
```typescript
// TypeScript/ES2015
const add = (a: number, b: number) => a + b;

// ES5
var add = function (a, b) { return a + b; };
```

**テンプレートリテラルの変換:**
```typescript
// TypeScript/ES2015
const message = `Hello, ${name}!`;

// ES5
var message = "Hello, " + name + "!";
```

### 解説

**Downleveling とは:**
- 新しい JavaScript の機能を古いバージョンに変換すること
- ブラウザの互換性を保つため
- `target` オプションで制御

**どの target を選ぶべきか:**
- **モダンブラウザのみ対応:** `ES2020` 以上
- **IE11 対応が必要:** `ES5`
- **Node.js:** `ES2020` 以上
- **ライブラリ開発:** `ES5` か `ES2015`

---

## 問題5の正答と解説

### 質問1の正答: コンパイル後の JavaScript

```javascript
function printUser(user) {
    console.log("Name: " + user.name + ", Age: " + user.age);
}
var myUser = {
    name: "Alice",
    age: 25
};
printUser(myUser);
```

### 質問2の正答

**`interface User` は JavaScript に残りません。**

完全に消えます。

### 質問3の正答: 型情報が消える理由

**理由:**
1. **JavaScript エンジンは型情報を必要としない**
   - 実行時には型チェックが不要
   - パフォーマンスへの影響なし

2. **TypeScript は開発時のツール**
   - コンパイル時に型チェックを行う
   - 実行時は通常の JavaScript として動作

3. **後方互換性**
   - 生成された JavaScript はどの環境でも動作
   - TypeScript がない環境でも実行可能

### 解説

**型の消去（Type Erasure）の影響:**

❌ **できないこと:**
```typescript
interface User {
  name: string;
}

function check(obj: any): boolean {
  return obj instanceof User; // エラー！User は実行時に存在しない
}
```

✅ **できること:**
```typescript
interface User {
  name: string;
}

function isUser(obj: any): obj is User {
  return typeof obj === "object" && 
         typeof obj.name === "string";
}
```
- Type Guard を使った実行時チェック
- 型情報ではなく、値の構造をチェック

**重要なポイント:**
- TypeScript の型は「コンパイル時のみ」存在
- 実行時の型チェックには Type Guard が必要
- `instanceof` は class でのみ使用可能（interface では不可）

---

## 問題6の正答と解説

### 正答

```typescript
/**
 * 型安全な計算機
 */

// 演算子の型定義（Literal Types）
type Operator = "add" | "subtract" | "multiply" | "divide";

/**
 * 計算を実行する関数
 * @param a 最初の数値
 * @param b 2番目の数値
 * @param operator 演算子
 * @returns 計算結果またはエラーメッセージ
 */
function calculate(a: number, b: number, operator: Operator): number | string {
  // 演算子ごとの処理
  switch (operator) {
    case "add":
      return a + b;
    
    case "subtract":
      return a - b;
    
    case "multiply":
      return a * b;
    
    case "divide":
      // ゼロ除算チェック
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    
    default:
      // この行には到達しないはずだが、念のため
      const exhaustiveCheck: never = operator;
      return exhaustiveCheck;
  }
}

// より厳密なバージョン（不正な演算子も受け入れる）
function calculateSafe(a: number, b: number, operator: string): number | string {
  // 有効な演算子のリスト
  const validOperators: Operator[] = ["add", "subtract", "multiply", "divide"];
  
  // 演算子の検証
  if (!validOperators.includes(operator as Operator)) {
    return "Error: Invalid operator";
  }
  
  // ゼロ除算チェック
  if (operator === "divide" && b === 0) {
    return "Error: Division by zero";
  }
  
  // 計算実行
  switch (operator as Operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

// テスト
console.log("=== 型安全な計算機 ===");
console.log(`10 + 5 = ${calculate(10, 5, "add")}`);           // 15
console.log(`10 - 5 = ${calculate(10, 5, "subtract")}`);      // 5
console.log(`10 * 5 = ${calculate(10, 5, "multiply")}`);      // 50
console.log(`10 / 5 = ${calculate(10, 5, "divide")}`);        // 2
console.log(`10 / 0 = ${calculate(10, 0, "divide")}`);        // Error
console.log(calculateSafe(10, 5, "power"));                    // Error
```

### 解説

**ポイント1: Literal Types**
```typescript
type Operator = "add" | "subtract" | "multiply" | "divide";
```
- 特定の文字列値のみを受け入れる
- タイポを防ぐ
- IDE の自動補完が効く

**ポイント2: Union 型の戻り値**
```typescript
function calculate(...): number | string
```
- 正常時は `number`
- エラー時は `string`
- より良い設計: Result型パターン（後述）

**ポイント3: Exhaustiveness Checking**
```typescript
default:
  const exhaustiveCheck: never = operator;
  return exhaustiveCheck;
```
- すべてのケースを処理したことを保証
- 新しい演算子を追加した際、コンパイルエラーで気づける

**より良い設計: Result型パターン**
```typescript
type Result<T, E> = 
  | { success: true; value: T }
  | { success: false; error: E };

function calculate(a: number, b: number, operator: Operator): Result<number, string> {
  if (operator === "divide" && b === 0) {
    return { success: false, error: "Division by zero" };
  }
  
  let value: number;
  switch (operator) {
    case "add": value = a + b; break;
    case "subtract": value = a - b; break;
    case "multiply": value = a * b; break;
    case "divide": value = a / b; break;
  }
  
  return { success: true, value };
}

// 使用例
const result = calculate(10, 5, "add");
if (result.success) {
  console.log(`Result: ${result.value}`);
} else {
  console.log(`Error: ${result.error}`);
}
```

---

## 問題7の正答と解説

### 正答例

**例1: プロパティ名のタイポ**

```typescript
interface User {
  name: string;
  email: string;
}

const user: User = {
  name: "Alice",
  email: "alice@example.com"
};

// TypeScript: コンパイルエラー
console.log(user.emial); // エラー！ Property 'emial' does not exist

// JavaScript: 実行時に undefined だが、エラーにならない
// console.log(user.emial); // undefined
```

**説明:**
- TypeScript: プロパティが存在しないことを検出
- JavaScript: `undefined` が返されるだけで気づきにくい

**例2: 関数の引数の数**

```typescript
function greet(firstName: string, lastName: string): string {
  return `Hello, ${firstName} ${lastName}`;
}

// TypeScript: コンパイルエラー
greet("Alice"); // エラー！ Expected 2 arguments, but got 1

// JavaScript: 実行時にエラーにならない
// greet("Alice"); // "Hello, Alice undefined"
```

**説明:**
- TypeScript: 引数の数が一致しないことを検出
- JavaScript: 不足した引数は `undefined` になる

**例3: メソッドの存在チェック**

```typescript
const numbers: number[] = [1, 2, 3];

// TypeScript: コンパイルエラー
numbers.toUpperCase(); // エラー！ Property 'toUpperCase' does not exist on type 'number[]'

// JavaScript: 実行時エラー
// numbers.toUpperCase(); // TypeError: numbers.toUpperCase is not a function
```

**説明:**
- TypeScript: 配列に `toUpperCase` メソッドが存在しないことを検出
- JavaScript: 実行時に TypeError が発生

### まとめ

TypeScriptの利点:
1. **早期発見**: コンパイル時にエラーを検出
2. **開発効率**: IDEのサポートでタイポを防ぐ
3. **安全性**: 実行前にバグを修正できる

---

## 学習のまとめ

この実践問題を通して、以下の内容を学びました：

### ✅ 理解できたこと
- 静的型チェックの仕組みと利点
- 明示的な型アノテーションの重要性
- strict モードの設定と効果
- Downleveling の仕組み
- 型の消去（Type Erasure）
- Literal Types を使った型安全な設計

### 🎯 重要なポイント
1. **TypeScript はコンパイル時にエラーを検出**
   - 実行前にバグを見つけられる
   - 開発効率が向上

2. **strict モードは必須**
   - より安全なコードが書ける
   - 新規プロジェクトでは必ず有効に

3. **型情報は実行時に消える**
   - 実行時チェックには Type Guard が必要
   - interface は JavaScript に変換されない

4. **Literal Types で柔軟な型定義**
   - 特定の値のみを受け入れる
   - タイポを防ぎ、自動補完が効く

### 📚 次のステップ

- [Practice_Everyday_Types](./Practice_Everyday_Types) - Everyday Types の実践問題に進む
- [Learning_Plan](./Learning_Plan) - 学習計画を確認
- [Learning_Method_Guide](./Learning_Method_Guide) - 学習方法を復習

---

お疲れ様でした！次の問題にチャレンジしましょう 🚀
