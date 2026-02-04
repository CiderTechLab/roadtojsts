# 実践問題：Get Started

**対応学習日:** Day 1-2  
**参考資料:** [TypeScript Handbook - Get Started](https://www.typescriptlang.org/docs/handbook/intro.html)  
**難易度:** ⭐初級

---

## 問題の目的

TypeScriptの基本概念と開発環境について理解を深めることを目的としています。

---

## 問題1: TypeScriptとJavaScriptの違い

### 問題文

以下の説明のうち、TypeScriptとJavaScriptの違いとして**正しいもの**をすべて選んでください。

A. TypeScriptは静的型チェックを提供する  
B. TypeScriptのコードは直接ブラウザで実行できる  
C. TypeScriptはJavaScriptのスーパーセットである  
D. TypeScriptはコンパイル時にエラーを検出できる

---

## 問題2: 基本的な型アノテーション

### 問題文

以下のJavaScriptコードをTypeScriptに書き換え、適切な型アノテーションを追加してください。

```javascript
function greet(name) {
  return "Hello, " + name;
}

const message = greet("TypeScript");
console.log(message);
```

**要件:**
- 関数の引数に型アノテーションを追加
- 関数の戻り値の型を明示
- 変数の型を明示（型推論を使わずに）

---

## 問題3: コンパイルエラーの理解

### 問題文

以下のTypeScriptコードはコンパイルエラーになります。なぜエラーになるのか説明し、正しいコードに修正してください。

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, "10");
console.log(result);
```

**質問:**
1. なぜこのコードはエラーになりますか？
2. どのように修正すればエラーが解消されますか？（2つの方法を示してください）

---

## 問題4: tsconfig.jsonの理解

### 問題文

新しいTypeScriptプロジェクトを始める際、`tsconfig.json`ファイルを作成する必要があります。以下の質問に答えてください。

**質問:**
1. `tsconfig.json`を自動生成するコマンドは何ですか？
2. 以下のコンパイラオプションはそれぞれ何を意味しますか？
   - `target`
   - `module`
   - `strict`
   - `outDir`

---

## 問題5: 実践課題

### 問題文

簡単な「年齢計算プログラム」をTypeScriptで作成してください。

**要件:**
1. 生年（西暦）を引数として受け取る関数を作成
2. 現在の年齢を計算して返す
3. 関数の引数と戻り値に適切な型を付ける
4. 無効な入力（未来の年、負の値など）に対してエラーメッセージを返す
5. .tsファイルを作成し、コンパイルして動作を確認する

**ファイル名:** `age_calculator.ts`

**関数シグネチャの例:**
```typescript
function calculateAge(birthYear: number): number | string {
  // ここに実装
}
```

---

## ヒント

### 問題1のヒント
- TypeScriptはコンパイル言語であることを考えましょう
- JavaScriptのすべての機能がTypeScriptで使えることを思い出しましょう

### 問題2のヒント
- 基本的な型: `string`, `number`, `boolean` などを使います
- 関数の戻り値の型は、関数名の後ろの括弧の後に `: 型名` で指定します

### 問題3のヒント
- 型の不一致に注目しましょう
- 文字列を数値に変換する方法を考えましょう

### 問題4のヒント
- `tsc --init` コマンドについて調べましょう
- 公式ドキュメントのtsconfig referenceを参照してください

### 問題5のヒント
- 現在の年は `new Date().getFullYear()` で取得できます
- Union型 (`number | string`) を使うと、複数の型を返せます
- 条件分岐で入力値の妥当性をチェックしましょう

---

## 次のステップ

これらの問題を解き終えたら、[正答と解説ページ](./Answer_Practice_Get_Started.md)で答え合わせをしましょう。

理解が不十分な箇所があれば、[Learning_Plan](./Learning_Plan)に戻って復習することをお勧めします。
