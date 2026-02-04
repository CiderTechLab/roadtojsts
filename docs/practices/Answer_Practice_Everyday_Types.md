# 正答と解説：Everyday Types

**対応学習日:** Day 5-7  
**参考資料:** [TypeScript Handbook - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

## 問題1の正答と解説

### 正答

```typescript
// 方法1: 基本的な書き方
const userName: string = "Alice";
const userAge: number = 30;
const isActive: boolean = true;
const scores: number[] = [85, 90, 78, 92];
const tags: string[] = ["TypeScript", "JavaScript", "React"];

// 方法2: Arrayジェネリック型を使用
const scores2: Array<number> = [85, 90, 78, 92];
const tags2: Array<string> = ["TypeScript", "JavaScript", "React"];
```

### 解説

**Primitives（プリミティブ型）:**
- `string`: 文字列型
- `number`: 数値型（整数と浮動小数点数の区別なし）
- `boolean`: 真偽値型

**配列の型定義（2通りの書き方）:**

1. **`Type[]` 記法**（推奨）
   ```typescript
   const numbers: number[] = [1, 2, 3];
   ```
   - シンプルで読みやすい
   - 一般的によく使われる

2. **`Array<Type>` 記法**
   ```typescript
   const numbers: Array<number> = [1, 2, 3];
   ```
   - ジェネリック型の明示的な使用
   - 複雑な型の場合に読みやすい

**どちらを使うべきか:**
- 基本的には `Type[]` を推奨
- 複雑なジェネリック型の場合は `Array<Type>` も検討
- チーム内で統一することが重要

---

## 問題2の正答と解説

### 正答

**方法1: Inline オブジェクト型**
```typescript
const user: {
  id: number;
  name: string;
  email: string;
  age?: number;
  address?: {
    city: string;
    zipCode: string;
  };
} = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
```

**方法2: Type Alias を使用**
```typescript
type Address = {
  city: string;
  zipCode: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
  address?: Address;
};

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  address: {
    city: "Tokyo",
    zipCode: "100-0001"
  }
};
```

### 解説

**オプショナルプロパティ（`?`）:**
```typescript
age?: number;
```
- プロパティが存在しなくてもOK
- 存在する場合は指定した型でなければならない
- `undefined` との Union型と同じ: `age?: number` ≈ `age: number | undefined`

**Inline vs Type Alias:**

**Inline の利点:**
- 1回しか使わない場合はシンプル
- 型定義の場所を探す必要がない

**Type Alias の利点:**
- 再利用可能
- 型に名前を付けられる（意図が明確）
- ネストした型を整理できる

**実務での推奨:**
- 1回しか使わない → Inline
- 複数回使う → Type Alias or Interface
- 型が複雑 → Type Alias or Interface

---

## 問題3の正答と解説

### 正答

```typescript
function formatId(id: number | string): string {
  if (typeof id === "number") {
    return `ID: ${id}`;
  } else {
    return `ID: ${id}`;
  }
}

// より実践的なバージョン
function formatIdAdvanced(id: number | string): string {
  // 数値の場合は0埋めする
  if (typeof id === "number") {
    return `ID: ${id.toString().padStart(6, "0")}`;
  }
  // 文字列の場合は大文字に変換
  return `ID: ${id.toUpperCase()}`;
}

// テスト
console.log(formatId(123));        // "ID: 123"
console.log(formatId("ABC123"));   // "ID: ABC123"
console.log(formatIdAdvanced(123));        // "ID: 000123"
console.log(formatIdAdvanced("abc123"));   // "ID: ABC123"
```

### 解説

**Union Types の基本:**
```typescript
id: number | string
```
- 「数値または文字列」のどちらかを受け入れる
- `|` で複数の型を結合

**Type Guard（型ガード）:**
```typescript
if (typeof id === "number") {
  // この中では id は number 型として扱われる
  id.toFixed(); // OK
}
```
- Union型を特定の型に絞り込む
- `typeof` 演算子を使った型ガード

**実務での活用例:**
- APIのIDが数値か文字列か分からない場合
- 複数の入力形式をサポートする場合
- 後方互換性を保ちながら型を変更する場合

---

## 問題4の正答と解説

### 正答

**方法1: Type Alias**
```typescript
type ProductCategory = "electronics" | "books" | "clothing";

type Product = {
  name: string;
  price: number;
  category: ProductCategory;
};

const laptop: Product = {
  name: "Laptop",
  price: 1200,
  category: "electronics"
};
```

**方法2: Interface**
```typescript
type ProductCategory = "electronics" | "books" | "clothing";

interface Product {
  name: string;
  price: number;
  category: ProductCategory;
}

const laptop: Product = {
  name: "Laptop",
  price: 1200,
  category: "electronics"
};
```

### 解説

**Type Alias vs Interface:**

| 特徴 | Type Alias | Interface |
|------|------------|-----------|
| オブジェクト型の定義 | ✅ | ✅ |
| 拡張（extends） | ❌（Intersection使用） | ✅ |
| 宣言のマージ | ❌ | ✅ |
| Union型 | ✅ | ❌ |
| Mapped Types | ✅ | ❌ |
| プリミティブ型のエイリアス | ✅ | ❌ |

**Type Alias の利点:**
```typescript
// Union型を定義できる
type ID = number | string;

// Intersection型を定義できる
type Animal = { name: string };
type Mammal = Animal & { warmBlooded: true };

// Mapped Typesを使える
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
```

**Interface の利点:**
```typescript
// 拡張が明示的
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

// 宣言のマージ（同じ名前で複数回宣言）
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}
// 両方のプロパティが含まれる
```

**どちらを使うべきか:**

- **オブジェクト型で拡張が必要** → Interface
- **Union型やMapped Typesが必要** → Type Alias
- **ライブラリの型定義** → Interface（マージ可能なため）
- **React Propsの定義** → どちらでもOK（チームで統一）

**実務での推奨:**
- 基本的には Interface を使う
- Union型やIntersection型が必要な場合は Type Alias
- 一貫性が最も重要

---

## 問題5の正答と解説

### 正答

```typescript
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction, steps: number): string {
  return `Moving ${direction} ${steps} steps`;
}

// テスト
console.log(move("up", 5));      // "Moving up 5 steps"
console.log(move("down", 3));    // "Moving down 3 steps"
console.log(move("left", 2));    // "Moving left 2 steps"
console.log(move("right", 4));   // "Moving right 4 steps"

// エラー例
// move("diagonal", 5); // エラー！"diagonal" は Direction型ではない
```

**より実践的な実装:**
```typescript
type Direction = "up" | "down" | "left" | "right";

type Position = {
  x: number;
  y: number;
};

function move(position: Position, direction: Direction, steps: number): Position {
  switch (direction) {
    case "up":
      return { ...position, y: position.y + steps };
    case "down":
      return { ...position, y: position.y - steps };
    case "left":
      return { ...position, x: position.x - steps };
    case "right":
      return { ...position, x: position.x + steps };
  }
}

// 使用例
let pos: Position = { x: 0, y: 0 };
pos = move(pos, "right", 5);  // { x: 5, y: 0 }
pos = move(pos, "up", 3);     // { x: 5, y: 3 }
console.log(pos);
```

### 解説

**Literal Types（リテラル型）:**
```typescript
type Direction = "up" | "down" | "left" | "right";
```
- 特定の文字列値のみを許可
- タイポを防ぐ
- IDEの自動補完が効く
- コンパイル時にチェック

**Literal Types の利点:**

1. **型安全性**
   ```typescript
   move("upp", 5); // エラー！タイポを検出
   ```

2. **自動補完**
   - IDEが候補を表示
   - 開発効率が上がる

3. **ドキュメント不要**
   - 型定義を見れば使い方が分かる

**実務での活用例:**
- APIのエンドポイント: `type Endpoint = "/users" | "/posts" | "/comments";`
- ステータス: `type Status = "pending" | "success" | "error";`
- HTTPメソッド: `type Method = "GET" | "POST" | "PUT" | "DELETE";`

---

## 問題6の正答と解説

### 正答

**方法1: if文を使う**
```typescript
function getUserName1(user: { name: string | null }): string {
  if (user.name === null) {
    return "Guest";
  }
  return user.name.toUpperCase();
}
```

**方法2: Optional Chaining を使う**
```typescript
function getUserName2(user: { name: string | null }): string {
  return user.name?.toUpperCase() ?? "Guest";
}
```

**方法3: Nullish Coalescing を使う**
```typescript
function getUserName3(user: { name: string | null }): string {
  const name = user.name ?? "Guest";
  return name.toUpperCase();
}
```

**すべてのパターンを含む実装:**
```typescript
type User = {
  name: string | null;
};

// 方法1: 明示的なnullチェック
function getUserName1(user: User): string {
  if (user.name === null) {
    return "GUEST";
  }
  return user.name.toUpperCase();
}

// 方法2: Optional Chaining + Nullish Coalescing
function getUserName2(user: User): string {
  return user.name?.toUpperCase() ?? "GUEST";
}

// 方法3: Nullish Coalescing で値を確定してから処理
function getUserName3(user: User): string {
  const name = user.name ?? "Guest";
  return name.toUpperCase();
}

// テスト
const user1: User = { name: "Alice" };
const user2: User = { name: null };

console.log(getUserName1(user1)); // "ALICE"
console.log(getUserName1(user2)); // "GUEST"
console.log(getUserName2(user1)); // "ALICE"
console.log(getUserName2(user2)); // "GUEST"
console.log(getUserName3(user1)); // "ALICE"
console.log(getUserName3(user2)); // "GUEST"
```

### 解説

**strictNullChecks の重要性:**
```typescript
// strictNullChecks: false の場合
function bad(name: string): string {
  return name.toUpperCase(); // nullが渡されると実行時エラー！
}
bad(null); // コンパイルは通るが、実行時エラー

// strictNullChecks: true の場合
function good(name: string): string {
  return name.toUpperCase();
}
// good(null); // コンパイルエラー！
```

**Optional Chaining (`?.`):**
```typescript
user.name?.toUpperCase()
```
- `user.name` が `null` or `undefined` の場合、`undefined` を返す
- メソッド呼び出しを安全に行える

**Nullish Coalescing (`??`):**
```typescript
const result = value ?? defaultValue;
```
- `value` が `null` or `undefined` の場合、`defaultValue` を返す
- `||` とは異なり、`0` や `""` は falsy として扱わない

**`||` vs `??` の違い:**
```typescript
const value1 = 0 || 100;  // 100（0 は falsy）
const value2 = 0 ?? 100;  // 0（0 は null/undefined ではない）

const value3 = "" || "default";  // "default"（"" は falsy）
const value4 = "" ?? "default";  // ""（"" は null/undefined ではない）
```

**どの方法を使うべきか:**
- **方法1（if文）:** 最も明示的、複雑な条件の場合
- **方法2（Optional Chaining）:** 最も簡潔、メソッドチェーンに便利
- **方法3（Nullish Coalescing）:** 値を確定してから処理したい場合

---

## 問題7の正答と解説

### 正答

**数値Enum:**
```typescript
enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

function log(level: LogLevel, message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${LogLevel[level]}] ${message}`);
}

// 使用例
log(LogLevel.DEBUG, "Debugging info");
log(LogLevel.INFO, "Application started");
log(LogLevel.WARN, "Warning message");
log(LogLevel.ERROR, "Error occurred");
```

**文字列Enum:**
```typescript
enum LogLevelString {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR"
}

function logString(level: LogLevelString, message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

// 使用例
logString(LogLevelString.DEBUG, "Debugging info");
logString(LogLevelString.INFO, "Application started");
```

**const Enum（最適化版）:**
```typescript
const enum LogLevelConst {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

function logConst(level: LogLevelConst, message: string): void {
  console.log(`[${level}] ${message}`);
}

// コンパイル後は数値に置き換えられる
logConst(LogLevelConst.INFO, "Message");
// → logConst(1, "Message");
```

### 解説

**数値Enum の利点と欠点:**

**利点:**
- コンパクト（数値のみ保存）
- 比較が高速
- 自動インクリメント

```typescript
enum Level {
  DEBUG,    // 0
  INFO,     // 1
  WARN,     // 2
  ERROR     // 3
}
```

**欠点:**
- デバッグ時に値が分かりにくい
- ログに出力すると数値になる
- リバースマッピングが必要

**文字列Enum の利点と欠点:**

**利点:**
- デバッグしやすい
- ログに出力しても分かりやすい
- 意味が明確

**欠点:**
- サイズが大きい
- 自動インクリメントがない

**const Enum の利点と欠点:**

**利点:**
- コンパイル後にインライン化される
- ランタイムオーバーヘッドがない
- 最も高速

**欠点:**
- リバースマッピングができない
- 分離コンパイル（isolatedModules）で使えない

**Enum の代替案（推奨）:**

**Union Type + Object:**
```typescript
const LogLevel = {
  DEBUG: "DEBUG",
  INFO: "INFO",
  WARN: "WARN",
  ERROR: "ERROR"
} as const;

type LogLevel = typeof LogLevel[keyof typeof LogLevel];

function log(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

log(LogLevel.INFO, "Message");
```

**利点:**
- より柔軟
- JavaScriptのオブジェクトとして扱える
- Tree-shakingに有利

**実務での推奨:**
- 新規プロジェクト → Union Type + Object
- 既存のEnumがある → そのまま使用
- 数値が必要 → 数値Enum
- 可読性重視 → 文字列Enum

---

## 問題8の正答と解説

### 正答

```typescript
/**
 * ショッピングカートシステム
 */

// 商品カテゴリの定義
type Category = "electronics" | "books" | "clothing";

// 商品の型定義
type Product = {
  id: number;
  name: string;
  price: number;
  category: Category;
  inStock: boolean;
};

// カート内の商品の型定義
type CartItem = {
  product: Product;
  quantity: number;
};

/**
 * カートに商品を追加する
 */
function addToCart(cart: CartItem[], product: Product, quantity: number): CartItem[] {
  // 既に同じ商品がカートにあるか確認
  const existingItem = cart.find(item => item.product.id === product.id);
  
  if (existingItem) {
    // 既にある場合は数量を追加
    return cart.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    // 新しい商品を追加
    return [...cart, { product, quantity }];
  }
}

/**
 * カートの合計金額を計算する
 */
function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);
}

/**
 * 在庫切れの商品を除外する
 */
function filterInStock(cart: CartItem[]): CartItem[] {
  return cart.filter(item => item.product.inStock);
}

/**
 * カートの内容を表示する
 */
function displayCart(cart: CartItem[]): void {
  console.log("=== Shopping Cart ===");
  cart.forEach(item => {
    const { product, quantity } = item;
    const subtotal = product.price * quantity;
    console.log(`${product.name} x ${quantity} = $${subtotal} ${!product.inStock ? "(Out of Stock)" : ""}`);
  });
  console.log(`Total: $${calculateTotal(cart)}`);
}

// テストデータ
const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics", inStock: true },
  { id: 2, name: "Mouse", price: 25, category: "electronics", inStock: true },
  { id: 3, name: "TypeScript Book", price: 40, category: "books", inStock: true },
  { id: 4, name: "T-Shirt", price: 20, category: "clothing", inStock: false },
];

// 実行例
let cart: CartItem[] = [];

// 商品を追加
cart = addToCart(cart, products[0], 1);  // Laptop x 1
cart = addToCart(cart, products[1], 2);  // Mouse x 2
cart = addToCart(cart, products[2], 1);  // TypeScript Book x 1
cart = addToCart(cart, products[3], 1);  // T-Shirt x 1 (在庫切れ)

console.log("Before filtering:");
displayCart(cart);
// Total: $1315

console.log("\nAfter filtering out-of-stock items:");
const inStockCart = filterInStock(cart);
displayCart(inStockCart);
// Total: $1295

// 同じ商品を再度追加
cart = addToCart(inStockCart, products[1], 1);  // Mouse をさらに1つ追加
console.log("\nAfter adding more mice:");
displayCart(cart);
// Mouse x 3
```

### 解説

**ポイント1: 型の設計**
```typescript
type Product = {
  id: number;
  name: string;
  price: number;
  category: Category;
  inStock: boolean;
};
```
- 商品の必要な情報を明確に定義
- Literal Types でカテゴリを制限

**ポイント2: イミュータブルな更新**
```typescript
return [...cart, { product, quantity }];
```
- Spread operator で新しい配列を作成
- 元の配列を変更しない（副作用なし）
- Reactなど、イミュータビリティが重要な場面で必須

**ポイント3: Array メソッドの活用**
```typescript
cart.find(item => item.product.id === product.id)
cart.map(item => /* 変換 */)
cart.filter(item => item.product.inStock)
cart.reduce((total, item) => /* 集計 */, 0)
```
- 関数型プログラミングのスタイル
- 読みやすく、バグが少ない

**ポイント4: 型安全性**
```typescript
function calculateTotal(cart: CartItem[]): number
```
- 戻り値が `number` であることを保証
- 型エラーがあればコンパイル時に検出

**発展課題:**

**1. カートから商品を削除する関数**
```typescript
function removeFromCart(cart: CartItem[], productId: number): CartItem[] {
  return cart.filter(item => item.product.id !== productId);
}
```

**2. 数量を更新する関数**
```typescript
function updateQuantity(cart: CartItem[], productId: number, newQuantity: number): CartItem[] {
  if (newQuantity <= 0) {
    return removeFromCart(cart, productId);
  }
  
  return cart.map(item =>
    item.product.id === productId
      ? { ...item, quantity: newQuantity }
      : item
  );
}
```

**3. カテゴリ別にグループ化**
```typescript
function groupByCategory(cart: CartItem[]): Record<Category, CartItem[]> {
  return cart.reduce((groups, item) => {
    const category = item.product.category;
    return {
      ...groups,
      [category]: [...(groups[category] || []), item]
    };
  }, {} as Record<Category, CartItem[]>);
}
```

**4. 割引の適用**
```typescript
type Discount = {
  category: Category;
  percentage: number;
};

function applyDiscount(cart: CartItem[], discount: Discount): number {
  return cart.reduce((total, item) => {
    const basePrice = item.product.price * item.quantity;
    if (item.product.category === discount.category) {
      return total + basePrice * (1 - discount.percentage / 100);
    }
    return total + basePrice;
  }, 0);
}

// 使用例
const booksDiscount: Discount = { category: "books", percentage: 20 };
const discountedTotal = applyDiscount(cart, booksDiscount);
```

---

## 学習のまとめ

この実践問題を通して、以下の内容を学びました：

### ✅ 理解できたこと
- Primitives と Arrays の基本
- Object Types の定義（Inline, Type Alias, Interface）
- Union Types を使った柔軟な型定義
- Literal Types による型の制限
- null と undefined の安全な扱い方
- Enum の使い方と代替案
- 実践的な型設計

### 🎯 重要なポイント
1. **型アノテーションは明示的に**
   - 型推論に頼りすぎない
   - 意図を明確にする

2. **Union Types で柔軟性を**
   - 複数の型を受け入れられる
   - Type Guard で型を絞り込む

3. **Literal Types で安全性を**
   - 特定の値のみを許可
   - タイポを防ぐ

4. **null/undefined は慎重に**
   - Optional Chaining と Nullish Coalescing を活用
   - strict モードは必須

5. **Type Alias vs Interface**
   - オブジェクト型は両方使える
   - Union型は Type Alias のみ
   - チーム内で統一する

### 📚 次のステップ

- [Practice_Narrowing](./Practice_Narrowing) - Narrowing の実践問題に進む
- [Learning_Plan](./Learning_Plan) - 学習計画を確認
- [Learning_Method_Guide](./Learning_Method_Guide) - 学習方法を復習

---

お疲れ様でした！次の問題にチャレンジしましょう 🚀
