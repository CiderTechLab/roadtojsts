# 実践問題: Everyday Types - 正答と解説

**対応学習日**: Day 5-7  
**難易度**: ⭐⭐初級〜中級

---

## 問題1の正答: プリミティブ型とアノテーション ⭐

### 正答例

```typescript
// 適切な型アノテーションを追加
let userName: string = "Alice";
let userAge: number = 25;
let isActive: boolean = true;

// これらの代入は正しく動作します
userName = "Bob";
userAge = 30;
isActive = false;

// これらの代入はエラーになります
userName = 123;        // Error: Type 'number' is not assignable to type 'string'
userAge = "thirty";    // Error: Type 'string' is not assignable to type 'number'
isActive = "yes";      // Error: Type 'string' is not assignable to type 'boolean'
```

### 解説

TypeScriptの3つの基本的なプリミティブ型：
- `string`: 文字列型
- `number`: 数値型（整数・小数どちらも含む）
- `boolean`: 真偽値型（trueまたはfalse）

**型アノテーションの構文**:
```typescript
let 変数名: 型 = 値;
```

**型推論について**:
実は、TypeScriptは初期値から型を推論できます：
```typescript
let userName = "Alice";  // 自動的にstring型と推論される
```

しかし、明示的な型アノテーションを書くことで：
1. コードの意図が明確になる
2. エディタの補完が効きやすくなる
3. チーム開発で型の意図を共有できる

**ベストプラクティス**:
- 初期値がある場合は型推論に任せることも多い
- 初期値がない場合や、意図を明確にしたい場合は型アノテーションを書く

---

## 問題2の正答: 配列とオブジェクト型 ⭐

### 正答例

```typescript
// User型を定義（Type Aliasを使用）
type User = {
  name: string;
  age: number;
  email: string;
  hobbies: string[];
};

function createUser(
  name: string,
  age: number,
  email: string,
  hobbies: string[]
): User {
  return {
    name,
    age,
    email,
    hobbies
  };
}

const user1 = createUser("Alice", 25, "alice@example.com", ["reading", "coding"]);
console.log(user1);
// 出力: { name: 'Alice', age: 25, email: 'alice@example.com', hobbies: ['reading', 'coding'] }
```

### 別解: Interfaceを使用

```typescript
// Interfaceを使用した定義
interface User {
  name: string;
  age: number;
  email: string;
  hobbies: string[];
}

// 関数はそのまま使用可能
function createUser(
  name: string,
  age: number,
  email: string,
  hobbies: string[]
): User {
  return { name, age, email, hobbies };
}
```

### 解説

**配列型の定義方法**:
```typescript
// 方法1: type[]
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// 方法2: Array<type>（ジェネリック記法）
let numbers: Array<number> = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

どちらも同じ意味ですが、`type[]`の方がシンプルで一般的です。

**オブジェクト型の定義方法**:
```typescript
// インライン型定義
function greet(person: { name: string; age: number }) {
  console.log(`Hello ${person.name}`);
}

// Type Aliasで定義
type Person = { name: string; age: number };
function greet(person: Person) {
  console.log(`Hello ${person.name}`);
}

// Interfaceで定義
interface Person {
  name: string;
  age: number;
}
```

**Type Alias vs Interface**:
- 基本的にはどちらでもOK
- Interfaceは拡張（extends）が得意
- Type Aliasはunion型などを定義できる

---

## 問題3の正答: Union TypesとType Aliases ⭐⭐

### 正答例

```typescript
// ID型をType Aliasで定義
type ID = number | string;

function printId(id: ID): void {
  if (typeof id === "string") {
    console.log(`ID (string): ${id.toUpperCase()}`);
  } else {
    console.log(`ID (number): ${id.toFixed(2)}`);
  }
}

// 正しく動作します
printId(101);        // ID (number): 101.00
printId("ABC123");   // ID (string): ABC123

// エラーになります
printId(true);       // Error: Argument of type 'boolean' is not assignable to parameter of type 'ID'
```

### 解説

**Union Types（ユニオン型）**:
複数の型のいずれかを許容する型です。
```typescript
type StringOrNumber = string | number;
type Status = "success" | "error" | "pending";
```

**型の絞り込み（Type Narrowing）**:
Union型を使用する場合、実際の型を確認してから操作する必要があります。

```typescript
function process(value: string | number) {
  // この時点でvalueはstring | number
  
  if (typeof value === "string") {
    // この分岐内ではvalueはstring型
    console.log(value.toUpperCase());
  } else {
    // この分岐内ではvalueはnumber型
    console.log(value.toFixed(2));
  }
}
```

**型ガード**:
- `typeof`: プリミティブ型の判定
- `instanceof`: クラスのインスタンス判定
- `in`: プロパティの存在チェック
- カスタム型ガード関数

**実用例**:
```typescript
type Result = 
  | { success: true; data: string }
  | { success: false; error: string };

function handleResult(result: Result) {
  if (result.success) {
    console.log(result.data);
  } else {
    console.error(result.error);
  }
}
```

---

## 問題4の正答: InterfaceとObject Types ⭐⭐

### 正答例

```typescript
// Product interfaceを定義
interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
  inStock: boolean;
}

function displayProduct(product: Product): void {
  console.log(`${product.name}: $${product.price}`);
  if (product.description) {
    console.log(`Description: ${product.description}`);
  }
  console.log(`In Stock: ${product.inStock}`);
}

const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  description: "High-performance laptop",
  inStock: true
};

const product2: Product = {
  id: 2,
  name: "Mouse",
  price: 29.99,
  inStock: false
};

displayProduct(product1);
// 出力:
// Laptop: $999.99
// Description: High-performance laptop
// In Stock: true

displayProduct(product2);
// 出力:
// Mouse: $29.99
// In Stock: false

// エラー: 読み取り専用プロパティへの代入
product1.id = 999;  // Error: Cannot assign to 'id' because it is a read-only property
```

### 解説

**オプショナルプロパティ（Optional Properties）**:
```typescript
interface User {
  name: string;
  age?: number;  // オプショナル
}

const user1: User = { name: "Alice", age: 25 };  // OK
const user2: User = { name: "Bob" };              // OK（ageは省略可能）
```

オプショナルプロパティの型は自動的に`Type | undefined`となります。

**読み取り専用プロパティ（Readonly Properties）**:
```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
point.x = 5;  // Error: Cannot assign to 'x' because it is a read-only property
```

**Interfaceの拡張**:
```typescript
interface BasicProduct {
  id: number;
  name: string;
  price: number;
}

interface DetailedProduct extends BasicProduct {
  description: string;
  images: string[];
}

const product: DetailedProduct = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  description: "High-performance laptop",
  images: ["image1.jpg", "image2.jpg"]
};
```

**インデックスシグネチャ**:
動的なプロパティ名を許可する場合：
```typescript
interface StringMap {
  [key: string]: string;
}

const config: StringMap = {
  apiUrl: "https://api.example.com",
  apiKey: "secret-key",
  // 任意の文字列プロパティを追加可能
};
```

---

## 問題5の正答: 関数の型定義 ⭐⭐

### 正答例

```typescript
// 2つの数値を足し算
function add(a: number, b: number): number {
  return a + b;
}

// 配列の数値の合計を計算
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// コールバック関数を受け取って配列の各要素に適用
function mapNumbers(
  numbers: number[],
  callback: (n: number) => number
): number[] {
  return numbers.map(callback);
}

// 使用例
console.log(add(5, 3));                          // 8
console.log(sum([1, 2, 3, 4, 5]));               // 15
console.log(mapNumbers([1, 2, 3], n => n * 2));  // [2, 4, 6]
```

### より汎用的な実装

```typescript
// ジェネリクスを使用した汎用的なmap関数
function mapArray<T, U>(
  array: T[],
  callback: (item: T, index: number) => U
): U[] {
  return array.map(callback);
}

// 使用例
const doubled = mapArray([1, 2, 3], n => n * 2);              // number[]
const strings = mapArray([1, 2, 3], n => `Number: ${n}`);     // string[]
const booleans = mapArray([1, 2, 3], n => n > 2);             // boolean[]
```

### 解説

**関数の型定義の基本**:
```typescript
function functionName(param1: Type1, param2: Type2): ReturnType {
  // 関数の本体
}
```

**関数式の型定義**:
```typescript
// 方法1: 変数に型アノテーション
const add: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

// 方法2: 関数式自体に型アノテーション
const add = (a: number, b: number): number => {
  return a + b;
};
```

**コールバック関数の型**:
```typescript
// インライン定義
function process(callback: (x: number) => string) {
  return callback(42);
}

// Type Aliasを使用
type NumberToString = (x: number) => string;
function process(callback: NumberToString) {
  return callback(42);
}
```

**オプショナル引数とデフォルト引数**:
```typescript
// オプショナル引数
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// デフォルト引数
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

greet("Alice");             // "Hello, Alice!"
greet("Alice", "Hi");       // "Hi, Alice!"
```

**Rest引数**:
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4, 5);  // 15
```

**void型**:
関数が何も返さない場合：
```typescript
function log(message: string): void {
  console.log(message);
  // return文がない、またはreturn;のみ
}
```

---

## 問題6の正答: Literal TypesとEnums ⭐⭐

### 正答例

```typescript
// OrderStatus enumを定義
enum OrderStatus {
  Pending,
  Processing,
  Shipped,
  Delivered,
  Cancelled
}

// PaymentMethod type aliasを定義（literal types使用）
type PaymentMethod = "credit_card" | "debit_card" | "paypal" | "cash";

// Order interfaceを定義
interface Order {
  orderId: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
}

function updateOrderStatus(order: Order, newStatus: OrderStatus): void {
  order.status = newStatus;
  console.log(`Order ${order.orderId} status updated to ${OrderStatus[newStatus]}`);
}

const order: Order = {
  orderId: 12345,
  status: OrderStatus.Pending,
  paymentMethod: "credit_card"
};

updateOrderStatus(order, OrderStatus.Processing);
// 出力: Order 12345 status updated to Processing

updateOrderStatus(order, OrderStatus.Shipped);
// 出力: Order 12345 status updated to Shipped

// エラーになります
updateOrderStatus(order, "Unknown");  // Error: Argument of type '"Unknown"' is not assignable

const invalidOrder: Order = {
  orderId: 12346,
  status: OrderStatus.Pending,
  paymentMethod: "bitcoin"  // Error: Type '"bitcoin"' is not assignable to type 'PaymentMethod'
};
```

### 別解: 文字列Enumを使用

```typescript
// 文字列Enum
enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

// 使用方法は同じ
const order: Order = {
  orderId: 12345,
  status: OrderStatus.Pending,  // "PENDING"
  paymentMethod: "credit_card"
};
```

### 解説

**数値Enum**:
```typescript
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

// 明示的に値を指定
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}
```

**文字列Enum**:
```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```

文字列Enumの利点：
- デバッグしやすい（値が意味のある文字列）
- シリアライズが簡単

**Literal Types**:
```typescript
// 文字列リテラル型
type Direction = "up" | "down" | "left" | "right";

// 数値リテラル型
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// 混在も可能
type Status = "success" | "error" | 404 | 500;
```

**Enum vs Literal Types**:

Enumの利点：
- 名前空間を提供
- 逆マッピング（数値Enumのみ）
- リファクタリングが容易

```typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}
// Status.Active, Status.Inactive のように使用
```

Literal Typesの利点：
- よりシンプル
- TypeScriptのネイティブな機能
- バンドルサイズが小さい

```typescript
type Status = "active" | "inactive";
// "active", "inactive" を直接使用
```

**const enum**:
より効率的なenum（実行時に存在しない）：
```typescript
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

const direction = Direction.Up;
// コンパイル後: const direction = 0;
```

---

## 問題7の正答: Type AssertionsとNullable Types ⭐⭐

### 正答例

```typescript
// getInputValue関数
function getInputValue(elementId: string): number | null {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Type Assertionを使用してHTMLInputElementとして扱う
    const inputElement = element as HTMLInputElement;
    const value = inputElement.value;
    
    // 数値に変換できる場合は数値を返す
    const numValue = parseFloat(value);
    return isNaN(numValue) ? null : numValue;
  }
  
  return null;
}

// User型を定義
interface User {
  name: string;
  email: string;
  phone?: string;  // オプショナル
}

function printUserInfo(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  // phoneがundefinedでないことを確認してから出力
  if (user.phone !== undefined) {
    console.log(`Phone: ${user.phone}`);
  }
}

const user1: User = {
  name: "Alice",
  email: "alice@example.com",
  phone: "123-456-7890"
};

const user2: User = {
  name: "Bob",
  email: "bob@example.com"
};

printUserInfo(user1);
// 出力:
// Name: Alice
// Email: alice@example.com
// Phone: 123-456-7890

printUserInfo(user2);
// 出力:
// Name: Bob
// Email: bob@example.com
```

### 別解: より安全な実装

```typescript
// より詳細な型ガードを使用
function getInputValue(elementId: string): number | null {
  const element = document.getElementById(elementId);
  
  if (!element) {
    return null;
  }
  
  // HTMLInputElementかどうかをチェック
  if (!(element instanceof HTMLInputElement)) {
    console.error("Element is not an input element");
    return null;
  }
  
  const numValue = parseFloat(element.value);
  return isNaN(numValue) ? null : numValue;
}

// Optional Chainingを使用
function printUserInfo(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  // Optional Chaining
  if (user.phone) {
    console.log(`Phone: ${user.phone}`);
  }
  
  // または三項演算子
  console.log(`Phone: ${user.phone ?? "Not provided"}`);
}
```

### 解説

**Type Assertion（型アサーション）**:
TypeScriptにこの値が特定の型であることを伝える機能。

```typescript
// 方法1: as構文（推奨）
const element = document.getElementById("myInput") as HTMLInputElement;

// 方法2: angle-bracket構文（JSXでは使用不可）
const element = <HTMLInputElement>document.getElementById("myInput");
```

**注意**: Type Assertionは型チェックをバイパスするため、慎重に使用してください。

**Nullable Types**:
```typescript
// null許容型
let value: string | null = null;
value = "hello";
value = null;  // OK

// undefined許容型
let value: string | undefined = undefined;
value = "hello";
value = undefined;  // OK

// 両方を許容
let value: string | null | undefined;
```

**Optional Chaining (`?.`)**:
```typescript
interface User {
  name: string;
  address?: {
    street: string;
    city: string;
  };
}

const user: User = { name: "Alice" };

// Optional Chaining
console.log(user.address?.city);  // undefined（エラーにならない）

// 従来の方法
console.log(user.address && user.address.city);
```

**Nullish Coalescing (`??`)**:
```typescript
const value = null;
const defaultValue = value ?? "default";  // "default"

const value2 = "";
const defaultValue2 = value2 ?? "default";  // ""（空文字はnullishではない）

// || との違い
const value3 = 0;
console.log(value3 || 100);   // 100（0はfalsyなので100）
console.log(value3 ?? 100);   // 0（0はnullishではないので0）
```

**Non-null Assertion Operator (`!`)**:
値がnullまたはundefinedでないことを確信している場合に使用：

```typescript
function processValue(value: string | null) {
  // valueがnullでないことが確実な場合
  console.log(value!.toUpperCase());
}

// 注意: 実際にnullの場合は実行時エラー
processValue(null);  // Runtime Error!
```

**strictNullChecks**:
`tsconfig.json`で`strictNullChecks: true`を設定すると、nullとundefinedの扱いが厳格になります。

```typescript
// strictNullChecks: true の場合
let value: string = "hello";
value = null;  // Error!

// nullを許容する場合は明示的に指定
let value: string | null = "hello";
value = null;  // OK
```

---

## 問題8の正答: 総合問題 - ユーザー管理システム ⭐⭐⭐

### 正答例

```typescript
// UserRole enumを定義
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

// UserProfile interfaceを定義
interface UserProfile {
  bio: string;
  website?: string;
  socialLinks: string[];
}

// User interfaceを定義
interface User {
  readonly id: number;
  username: string;
  email: string;
  role: UserRole;
  profile?: UserProfile;
}

// ユーザー作成関数
function createUser(
  username: string,
  email: string,
  role: UserRole,
  profile?: UserProfile
): User {
  // 注: 実際の開発では、データベースが自動生成するIDやUUIDを使用してください
  const id = Math.floor(Math.random() * 10000);
  return { id, username, email, role, profile };
}

// ユーザーの権限をチェックする関数
function canEdit(user: User): boolean {
  return user.role === UserRole.Admin || user.role === UserRole.Editor;
}

// ユーザー情報を検証する関数
function validateUser(user: User): string[] | null {
  const errors: string[] = [];
  
  if (user.username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }
  
  if (!user.email.includes("@")) {
    errors.push("Invalid email format");
  }
  
  return errors.length === 0 ? null : errors;
}

// ユーザーIDで検索する関数
function findUserById(users: User[], id: number): User | null {
  const user = users.find(u => u.id === id);
  return user || null;
}

// 使用例
const admin = createUser("admin", "admin@example.com", UserRole.Admin, {
  bio: "System Administrator",
  socialLinks: ["https://twitter.com/admin"]
});

const editor = createUser("editor", "editor@example.com", UserRole.Editor);

console.log(canEdit(admin));   // true
console.log(canEdit(editor));  // true

const invalidUser = createUser("ab", "invalid-email", UserRole.Viewer);
const validationErrors = validateUser(invalidUser);
console.log(validationErrors);
// ["Username must be at least 3 characters", "Invalid email format"]

// ユーザー検索の例
const users = [admin, editor];
const foundUser = findUserById(users, admin.id);
if (foundUser) {
  console.log(`Found user: ${foundUser.username}`);
} else {
  console.log("User not found");
}
```

### 発展: より実践的な実装

```typescript
// Result型を使用したエラーハンドリング
type Result<T, E = string> = 
  | { success: true; data: T }
  | { success: false; error: E };

// より詳細なバリデーション
interface ValidationError {
  field: string;
  message: string;
}

function validateUserAdvanced(user: User): Result<User, ValidationError[]> {
  const errors: ValidationError[] = [];
  
  if (user.username.length < 3) {
    errors.push({
      field: "username",
      message: "Username must be at least 3 characters"
    });
  }
  
  if (!/^[a-zA-Z0-9_]+$/.test(user.username)) {
    errors.push({
      field: "username",
      message: "Username can only contain letters, numbers, and underscores"
    });
  }
  
  if (!user.email.includes("@") || !user.email.includes(".")) {
    errors.push({
      field: "email",
      message: "Invalid email format"
    });
  }
  
  if (user.profile?.website) {
    try {
      new URL(user.profile.website);
    } catch {
      errors.push({
        field: "profile.website",
        message: "Invalid website URL"
      });
    }
  }
  
  if (errors.length > 0) {
    return { success: false, error: errors };
  }
  
  return { success: true, data: user };
}

// ユーザーリポジトリクラス
class UserRepository {
  private users: Map<number, User> = new Map();
  
  add(user: User): void {
    this.users.set(user.id, user);
  }
  
  findById(id: number): User | null {
    return this.users.get(id) ?? null;
  }
  
  findByRole(role: UserRole): User[] {
    return Array.from(this.users.values()).filter(u => u.role === role);
  }
  
  update(id: number, updates: Partial<Omit<User, 'id'>>): User | null {
    const user = this.users.get(id);
    if (!user) return null;
    
    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    return updatedUser;
  }
  
  delete(id: number): boolean {
    return this.users.delete(id);
  }
  
  getAll(): User[] {
    return Array.from(this.users.values());
  }
}

// 使用例
const repo = new UserRepository();

const admin = createUser("admin", "admin@example.com", UserRole.Admin, {
  bio: "System Administrator",
  socialLinks: ["https://twitter.com/admin"]
});

// バリデーション
const validationResult = validateUserAdvanced(admin);
if (validationResult.success) {
  repo.add(validationResult.data);
  console.log("User added successfully");
} else {
  console.error("Validation errors:", validationResult.error);
}

// ロールでフィルタリング
const admins = repo.findByRole(UserRole.Admin);
console.log(`Found ${admins.length} admins`);
```

### 解説

この総合問題では、これまで学んだすべての概念を組み合わせています：

**1. Enum（列挙型）**:
ユーザーロールを明確に定義し、型安全性を確保。

**2. Interface**:
複雑なオブジェクト構造を定義し、再利用可能な型を作成。

**3. Optional Properties**:
必須でない情報（プロフィール、ウェブサイトなど）を柔軟に扱う。

**4. Readonly Properties**:
IDのような変更されるべきでない値を保護。

**5. Union Types**:
`string[] | null`のように、複数の型を許容する柔軟なAPI。

**6. Type Guards**:
`if (user.profile)`のように、型を絞り込んで安全に操作。

**7. Utility Types（発展例）**:
```typescript
Partial<T>        // すべてのプロパティをオプショナルに
Readonly<T>       // すべてのプロパティを読み取り専用に
Pick<T, K>        // 特定のプロパティのみを選択
Omit<T, K>        // 特定のプロパティを除外
Record<K, T>      // キーと値の型を指定したオブジェクト
```

**実践的なパターン**:
- Result型パターン: 成功/失敗を型安全に表現
- Repositoryパターン: データアクセスを抽象化
- Validation: 型システムとランタイムチェックの組み合わせ

---

## まとめ

### 重要なポイント

1. **型アノテーションの適切な使用**
   - プリミティブ型: string, number, boolean
   - 配列型: type[]
   - オブジェクト型: interface または type alias

2. **Union Typesの活用**
   - 複数の型を許容: `string | number`
   - 型ガードで絞り込み: `typeof`, `instanceof`, `in`

3. **InterfaceとType Aliasの使い分け**
   - Interface: オブジェクト型、拡張が必要な場合
   - Type Alias: Union型、Primitive型の組み合わせ

4. **Nullable Types**
   - `Type | null`, `Type | undefined`
   - Optional Chaining: `?.`
   - Nullish Coalescing: `??`

5. **EnumとLiteral Types**
   - Enum: 名前付きの定数セット
   - Literal Types: 特定の値のみを許容

6. **関数の型定義**
   - 引数と戻り値の型を明示
   - コールバック関数の型
   - オプショナル引数とデフォルト引数

### ベストプラクティス

1. **型推論を活用しつつ、必要な場所では明示的に型を書く**
2. **anyは避け、unknownや適切なUnion Typesを使用する**
3. **Non-null assertion operator (!) は慎重に使用する**
4. **strictNullChecksを有効にして、null安全性を確保する**
5. **複雑な型は小さな型に分割して定義する**

### 次のステップ

Everyday Typesの基礎を習得したら、以下のトピックに進みましょう：

1. **Narrowing**: より高度な型の絞り込みテクニック
2. **More on Functions**: オーバーロード、ジェネリクス
3. **Object Types**: インデックスシグネチャ、型の拡張
4. **Type Manipulation**: Conditional Types, Mapped Types
5. **Classes**: クラスの型定義とアクセス修飾子

---

## 参考リソース

- [TypeScript Handbook - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

実際にコードを書いて試すことが最も重要です。TypeScript Playgroundを使って、これらの例を実行してみてください！
