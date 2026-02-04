# 正答と解説：Get Started

**対応学習日:** Day 1-2  
**参考資料:** [TypeScript Handbook - Get Started](https://www.typescriptlang.org/docs/handbook/intro.html)

---

## 問題1の正答と解説

### 正答
**A, C, D が正しい**

### 解説

**A. TypeScriptは静的型チェックを提供する** ✅
- 正しいです。TypeScriptの最大の特徴は、コンパイル時に型をチェックすることです。

**B. TypeScriptのコードは直接ブラウザで実行できる** ❌
- 間違いです。TypeScriptはJavaScriptにコンパイルする必要があります。ブラウザはTypeScriptを直接実行できません。

**C. TypeScriptはJavaScriptのスーパーセットである** ✅
- 正しいです。すべてのJavaScriptコードは有効なTypeScriptコードです。TypeScriptはJavaScriptに型システムを追加したものです。

**D. TypeScriptはコンパイル時にエラーを検出できる** ✅
- 正しいです。実行前に多くのエラーを検出できるため、バグを早期に発見できます。

---

## 問題2の正答と解説

### 正答

```typescript
function greet(name: string): string {
  return "Hello, " + name;
}

const message: string = greet("TypeScript");
console.log(message);
```

### 解説

**型アノテーションの追加箇所:**

1. **引数の型** `name: string`
   - 関数の引数には `: 型名` を付けて型を指定します
   - この場合、nameは文字列なので `string` 型

2. **戻り値の型** `: string`
   - 関数の括弧の後に `: 型名` を付けます
   - この関数は文字列を返すので `string` 型

3. **変数の型** `message: string`
   - 変数にも型を明示できます
   - greet関数が文字列を返すので、messageも `string` 型

**補足:**
TypeScriptの型推論により、`const message = greet("TypeScript");` のように型を省略しても、TypeScriptは自動的にmessageがstring型だと判断してくれます。しかし、問題では明示的に型を書くことが求められています。

---

## 問題3の正答と解説

### 質問1の正答: なぜエラーになるか

**エラーの理由:**
`add` 関数は2つの `number` 型の引数を期待していますが、2番目の引数に文字列 `"10"` が渡されています。これは型の不一致によるエラーです。

**エラーメッセージ例:**
```
Argument of type 'string' is not assignable to parameter of type 'number'.
```

### 質問2の正答: 修正方法

**修正方法1: 文字列を数値に変換する**

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, Number("10")); // または parseInt("10")
console.log(result); // 15
```

**修正方法2: 文字列型も受け入れるように関数を変更する**

```typescript
function add(a: number, b: number | string): number {
  const bNumber = typeof b === "string" ? Number(b) : b;
  return a + bNumber;
}

const result = add(5, "10");
console.log(result); // 15
```

### 解説

**修正方法1の解説:**
- `Number()` や `parseInt()` を使って文字列を数値に変換
- 最もシンプルで直接的な解決方法
- 関数のシグネチャを変更する必要がない

**修正方法2の解説:**
- Union型 (`number | string`) を使って複数の型を受け入れる
- 関数内で型チェックと変換を行う
- より柔軟な関数設計だが、少し複雑になる

**どちらを選ぶべきか:**
- 関数が常に数値だけを扱うべきなら**修正方法1**
- 文字列の入力も許容する設計なら**修正方法2**

---

## 問題4の正答と解説

### 質問1の正答

```bash
tsc --init
```

このコマンドを実行すると、デフォルトの設定が含まれた `tsconfig.json` ファイルが生成されます。

### 質問2の正答

**`target`**
- **意味:** コンパイル後のJavaScriptのバージョンを指定
- **例:** `"target": "ES2020"` → ES2020の文法に変換
- **よく使う値:** `"ES5"`, `"ES2015"`, `"ES2020"`, `"ESNext"`

**`module`**
- **意味:** モジュールシステムを指定
- **例:** `"module": "commonjs"` → Node.js用
- **よく使う値:** `"commonjs"`, `"ES2015"`, `"ESNext"`

**`strict`**
- **意味:** すべての厳格な型チェックオプションを有効にする
- **例:** `"strict": true` → 型安全性が最大限に
- **推奨:** 新規プロジェクトでは `true` に設定すべき

**`outDir`**
- **意味:** コンパイル後のJSファイルの出力先ディレクトリ
- **例:** `"outDir": "./dist"` → distフォルダに出力
- **補足:** ソースコードと分離して管理できる

### 解説

**tsconfig.jsonの重要性:**
- プロジェクト全体のTypeScriptの動作を制御
- チーム開発で設定を統一できる
- IDEがこの設定を読み込んで、適切なサポートを提供

**最小限の設定例:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

## 問題5の正答と解説

### 正答例

```typescript
/**
 * 年齢計算プログラム
 * @description 生年から現在の年齢を計算する
 */

/**
 * 生年から現在の年齢を計算する関数
 * @param birthYear 生年（西暦）
 * @returns 年齢（数値）またはエラーメッセージ（文字列）
 */
function calculateAge(birthYear: number): number | string {
  // 現在の年を取得
  const currentYear: number = new Date().getFullYear();
  
  // 入力値のバリデーション
  if (birthYear < 1900) {
    return "エラー: 1900年以降の年を入力してください";
  }
  
  if (birthYear > currentYear) {
    return "エラー: 未来の年は指定できません";
  }
  
  // 年齢を計算
  const age: number = currentYear - birthYear;
  
  return age;
}

// テストケース
console.log("=== 年齢計算プログラム ===");

// 正常なケース
console.log(`1990年生まれの年齢: ${calculateAge(1990)}`);
console.log(`2000年生まれの年齢: ${calculateAge(2000)}`);
console.log(`2020年生まれの年齢: ${calculateAge(2020)}`);

// エラーケース
console.log(calculateAge(1899)); // エラーメッセージ
console.log(calculateAge(2027)); // エラーメッセージ

// 型安全性の確認
const result = calculateAge(1990);
if (typeof result === "number") {
  console.log(`年齢は ${result} 歳です`);
} else {
  console.log(`エラーが発生しました: ${result}`);
}
```

### 実行方法

```bash
# TypeScriptファイルをコンパイル
tsc age_calculator.ts

# コンパイルされたJavaScriptを実行
node age_calculator.js
```

### 解説

**ポイント1: Union型の使用**
```typescript
function calculateAge(birthYear: number): number | string
```
- 戻り値が `number | string` となっている
- 正常時は年齢（数値）、エラー時はメッセージ（文字列）を返す
- これにより柔軟なエラーハンドリングが可能

**ポイント2: 入力値のバリデーション**
```typescript
if (birthYear < 1900) {
  return "エラー: 1900年以降の年を入力してください";
}
```
- 無効な入力に対してエラーメッセージを返す
- 実務でも重要なパターン

**ポイント3: 型の絞り込み**
```typescript
if (typeof result === "number") {
  console.log(`年齢は ${result} 歳です`);
}
```
- Union型の値を使う際は、型を絞り込む必要がある
- `typeof` を使った型ガード

**改善案1: エラーハンドリングの強化**
```typescript
function calculateAge(birthYear: number): { success: true; age: number } | { success: false; error: string } {
  const currentYear: number = new Date().getFullYear();
  
  if (birthYear < 1900) {
    return { success: false, error: "1900年以降の年を入力してください" };
  }
  
  if (birthYear > currentYear) {
    return { success: false, error: "未来の年は指定できません" };
  }
  
  const age: number = currentYear - birthYear;
  return { success: true, age };
}

// 使用例
const result = calculateAge(1990);
if (result.success) {
  console.log(`年齢は ${result.age} 歳です`);
} else {
  console.log(`エラー: ${result.error}`);
}
```

**改善案2: 例外を使う方法**
```typescript
function calculateAge(birthYear: number): number {
  const currentYear: number = new Date().getFullYear();
  
  if (birthYear < 1900) {
    throw new Error("1900年以降の年を入力してください");
  }
  
  if (birthYear > currentYear) {
    throw new Error("未来の年は指定できません");
  }
  
  return currentYear - birthYear;
}

// 使用例
try {
  const age = calculateAge(1990);
  console.log(`年齢は ${age} 歳です`);
} catch (error) {
  console.error(`エラー: ${error.message}`);
}
```

---

## 学習のまとめ

この実践問題を通して、以下の内容を学びました：

### ✅ 理解できたこと
- TypeScriptとJavaScriptの違い
- 基本的な型アノテーションの書き方
- 型エラーの読み方と修正方法
- tsconfig.jsonの基本設定
- 実践的な型安全なプログラムの書き方

### 🎯 重要なポイント
1. **TypeScriptはコンパイル言語**
   - .tsファイルは.jsファイルに変換される必要がある

2. **型アノテーションで安全性向上**
   - 引数、戻り値、変数に型を付けることでバグを防ぐ

3. **Union型で柔軟な設計**
   - 複数の型を受け入れることができる

4. **入力値の検証は重要**
   - 実務では常に入力値をチェックする

### 📚 次のステップ

- [Practice_The_Basics](./Practice_The_Basics) - The Basicsの実践問題に進む
- [Learning_Plan](./Learning_Plan) - 学習計画を確認
- [Learning_Method_Guide](./Learning_Method_Guide) - 学習方法を復習

---

お疲れ様でした！次の問題にチャレンジしましょう 🚀
