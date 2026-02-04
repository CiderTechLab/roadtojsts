# 実践問題：Everyday Types

**対応学習日:** Day 5-7  
**参考資料:** [TypeScript Handbook - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)  
**難易度:** ⭐⭐初級〜中級

---

## 問題の目的

TypeScriptで日常的に使用する基本的な型について、実践的な理解を深めることを目的としています。

---

## 問題1: Primitives と Arrays

### 問題文

以下のJavaScriptコードにTypeScriptの型アノテーションを追加してください。

```javascript
const userName = "Alice";
const userAge = 30;
const isActive = true;
const scores = [85, 90, 78, 92];
const tags = ["TypeScript", "JavaScript", "React"];
```

**要件:**
- すべての変数に適切な型アノテーションを追加
- 配列の型は2通りの書き方で示す（`Type[]` と `Array<Type>`）

---

## 問題2: Object Types

### 問題文

以下の要件を満たすユーザー情報オブジェクトの型を定義してください。

**要件:**
- `id`: 数値（必須）
- `name`: 文字列（必須）
- `email`: 文字列（必須）
- `age`: 数値（オプショナル）
- `address`: オブジェクト（オプショナル）
  - `city`: 文字列
  - `zipCode`: 文字列

2通りの方法で定義してください:
1. Inline オブジェクト型
2. Type Alias を使用

---

## 問題3: Union Types

### 問題文

以下の関数を実装してください。

```typescript
function formatId(id: /* ここに型を書く */) {
  // 実装
}

// テストケース
formatId(123);        // "ID: 123"
formatId("ABC123");   // "ID: ABC123"
```

**要件:**
- `id` は数値または文字列を受け入れる
- 数値の場合と文字列の場合で適切に処理する
- 戻り値の型も明示する

---

## 問題4: Type Aliases と Interfaces

### 問題文

以下の2つの方法でProductの型を定義し、違いを説明してください。

**要件:**
- `name`: 文字列
- `price`: 数値
- `category`: "electronics" | "books" | "clothing" のいずれか

**質問:**
1. Type Alias で定義
2. Interface で定義
3. どちらを使うべきか、それぞれの利点を説明

---

## 問題5: Literal Types

### 問題文

方向を表す関数を実装してください。

```typescript
function move(direction: /* 型定義 */, steps: number): string {
  // 実装
}

move("up", 5);      // "Moving up 5 steps"
move("down", 3);    // "Moving down 3 steps"
move("left", 2);    // "Moving left 2 steps"
move("right", 4);   // "Moving right 4 steps"
```

**要件:**
- direction は "up" | "down" | "left" | "right" のみ許可
- それ以外の値はコンパイルエラーになる
- Type Alias で Direction 型を定義する

---

## 問題6: null と undefined の処理

### 問題文

以下のコードを `strict: true` で動作するように修正してください。

```typescript
function getUserName(user: { name: string | null }): string {
  return user.name.toUpperCase();
}
```

**要件:**
- `null` の場合は "Guest" を返す
- 3通りの方法で実装する:
  1. if文を使う方法
  2. Optional Chaining を使う方法
  3. Nullish Coalescing を使う方法

---

## 問題7: Enums

### 問題文

ログレベルを表すEnumを作成してください。

**要件:**
- レベル: DEBUG (0), INFO (1), WARN (2), ERROR (3)
- 数値Enumと文字列Enumの両方で実装
- それぞれの利点と欠点を説明
- ログメッセージを出力する関数を実装

```typescript
function log(level: /* Enum型 */, message: string): void {
  // 実装
}
```

---

## 問題8: 実践課題 - ショッピングカート

### 問題文

簡単なショッピングカートシステムを実装してください。

**要件:**

1. **Product 型の定義**
   - id: 数値
   - name: 文字列
   - price: 数値
   - category: Literal Type ("electronics" | "books" | "clothing")
   - inStock: 真偽値

2. **CartItem 型の定義**
   - product: Product
   - quantity: 数値

3. **関数の実装**
   ```typescript
   // カートに商品を追加
   function addToCart(cart: CartItem[], product: Product, quantity: number): CartItem[]
   
   // カートの合計金額を計算
   function calculateTotal(cart: CartItem[]): number
   
   // 在庫切れの商品を除外
   function filterInStock(cart: CartItem[]): CartItem[]
   ```

4. **テストデータで動作確認**

**ファイル名:** `shopping_cart.ts`

---

## ヒント

### 問題1のヒント
- 配列の型: `number[]` または `Array<number>`
- 型推論でも正しい型が推測されるが、明示的に書く練習

### 問題2のヒント
- オプショナルプロパティには `?` を使う
- ネストしたオブジェクトも型定義が必要

### 問題3のヒント
- Union型: `number | string`
- `typeof` で型を判定する

### 問題4のヒント
- Interface は拡張可能
- Type Alias はUnion/Intersectionに向いている

### 問題5のヒント
- Literal Types を Union で組み合わせる
- テンプレートリテラル を使うとキレイ

### 問題6のヒント
- Optional Chaining: `?.`
- Nullish Coalescing: `??`
- 両方を組み合わせると簡潔に書ける

### 問題7のヒント
- 数値Enum: `enum Level { DEBUG, INFO, ... }`
- 文字列Enum: `enum Level { DEBUG = "DEBUG", ... }`
- const enum も検討

### 問題8のヒント
- Spread operator でイミュータブルに配列を更新
- Array メソッド（map, filter, reduce）を活用
- 型安全性を保ちながら実装

---

## 次のステップ

これらの問題を解き終えたら、[正答と解説ページ](./Answer_Practice_Everyday_Types.md)で答え合わせをしましょう。

理解が不十分な箇所があれば、[Learning_Plan](./Learning_Plan)に戻って復習することをお勧めします。
