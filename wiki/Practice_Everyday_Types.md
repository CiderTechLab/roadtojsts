# 実践問題: Everyday Types

**対応学習日**: Day 5-7  
**難易度**: ⭐⭐初級〜中級  
**推奨学習時間**: 2-3時間

## 学習内容

この実践問題では、TypeScriptの日常的に使用する型について学習します：

- Primitives: string, number, boolean
- Arrays
- any
- Type Annotations on Variables
- Functions（引数と戻り値の型）
- Object Types
- Union Types
- Type Aliases
- Interfaces
- Type Assertions
- Literal Types
- null and undefined
- Enums

---

## 問題1: プリミティブ型とアノテーション ⭐

### 目的
基本的なプリミティブ型（string, number, boolean）と型アノテーションの使い方を理解する。

### 問題
以下のコードには型エラーがあります。適切な型アノテーションを追加して修正してください。

```typescript
// TODO: 適切な型アノテーションを追加してください
let userName = "Alice";
let userAge = 25;
let isActive = true;

// これらの代入は正しく動作するべきです
userName = "Bob";
userAge = 30;
isActive = false;

// これらの代入はエラーになるべきです
userName = 123;        // エラー
userAge = "thirty";    // エラー
isActive = "yes";      // エラー
```

### ヒント
- 変数宣言時に`: type`の形式で型アノテーションを追加します
- TypeScriptは型推論を行いますが、明示的な型アノテーションも重要です

---

## 問題2: 配列とオブジェクト型 ⭐

### 目的
配列型とオブジェクト型の定義方法を理解する。

### 問題
ユーザー情報を管理する関数を作成してください。以下の要件を満たすようにしてください。

```typescript
// TODO: User型を定義してください
// - name: string
// - age: number
// - email: string
// - hobbies: string[]

function createUser(name, age, email, hobbies) {
  // TODO: 適切な型アノテーションを追加
  return {
    name,
    age,
    email,
    hobbies
  };
}

// TODO: この関数が正しく動作するようにしてください
const user1 = createUser("Alice", 25, "alice@example.com", ["reading", "coding"]);
console.log(user1);
```

### ヒント
- オブジェクト型は`{ property: type }`の形式で定義します
- 配列型は`type[]`または`Array<type>`で定義します

---

## 問題3: Union TypesとType Aliases ⭐⭐

### 目的
Union Typesを使用して複数の型を許容する方法と、Type Aliasesで型に名前をつける方法を学ぶ。

### 問題
ID値として数値または文字列を受け取れる関数を作成してください。

```typescript
// TODO: ID型をType Aliasで定義（numberまたはstring）

// TODO: この関数に適切な型アノテーションを追加
function printId(id) {
  if (typeof id === "string") {
    console.log(`ID (string): ${id.toUpperCase()}`);
  } else {
    console.log(`ID (number): ${id.toFixed(2)}`);
  }
}

// これらはすべて正しく動作するべきです
printId(101);
printId("ABC123");

// これはエラーになるべきです
printId(true);
```

### ヒント
- Union Typeは`type1 | type2`の形式で定義します
- Type Aliasは`type TypeName = ...`の形式で定義します
- 型を絞り込む際は`typeof`を使用します

---

## 問題4: InterfaceとObject Types ⭐⭐

### 目的
Interfaceを使用してオブジェクトの構造を定義し、オプショナルプロパティと読み取り専用プロパティを理解する。

### 問題
商品情報を管理するシステムを作成してください。

```typescript
// TODO: Product interfaceを定義
// - id: number (読み取り専用)
// - name: string
// - price: number
// - description?: string (オプショナル)
// - inStock: boolean

// TODO: この関数に適切な型アノテーションを追加
function displayProduct(product) {
  console.log(`${product.name}: $${product.price}`);
  if (product.description) {
    console.log(`Description: ${product.description}`);
  }
  console.log(`In Stock: ${product.inStock}`);
}

const product1 = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  description: "High-performance laptop",
  inStock: true
};

const product2 = {
  id: 2,
  name: "Mouse",
  price: 29.99,
  inStock: false
};

displayProduct(product1);
displayProduct(product2);

// これはエラーになるべきです
product1.id = 999;
```

### ヒント
- Interfaceは`interface Name { ... }`の形式で定義します
- オプショナルプロパティは`property?: type`
- 読み取り専用プロパティは`readonly property: type`

---

## 問題5: 関数の型定義 ⭐⭐

### 目的
関数の引数と戻り値に適切な型を付与する方法を学ぶ。

### 問題
以下の数学的な操作を行う関数群に適切な型を追加してください。

```typescript
// TODO: 適切な型アノテーションを追加

// 2つの数値を足し算
function add(a, b) {
  return a + b;
}

// 配列の数値の合計を計算
function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// コールバック関数を受け取って配列の各要素に適用
function mapNumbers(numbers, callback) {
  return numbers.map(callback);
}

// 使用例
console.log(add(5, 3));                          // 8
console.log(sum([1, 2, 3, 4, 5]));               // 15
console.log(mapNumbers([1, 2, 3], n => n * 2));  // [2, 4, 6]
```

### ヒント
- 関数の型は`function name(param: type): returnType`の形式
- コールバック関数の型は`(param: type) => returnType`の形式
- `reduce`や`map`などの配列メソッドも型推論が効きます

---

## 問題6: Literal TypesとEnums ⭐⭐

### 目的
Literal TypesとEnumsを使用して、値を特定のセットに制限する方法を学ぶ。

### 問題
注文ステータス管理システムを作成してください。

```typescript
// TODO: OrderStatus enumを定義
// - Pending
// - Processing  
// - Shipped
// - Delivered
// - Cancelled

// TODO: PaymentMethod type aliasを定義（literal types使用）
// - "credit_card" | "debit_card" | "paypal" | "cash"

// TODO: Order interfaceを定義
// - orderId: number
// - status: OrderStatus
// - paymentMethod: PaymentMethod

// TODO: この関数に適切な型を追加
function updateOrderStatus(order, newStatus) {
  order.status = newStatus;
  console.log(`Order ${order.orderId} status updated to ${OrderStatus[newStatus]}`);
}

const order = {
  orderId: 12345,
  status: OrderStatus.Pending,
  paymentMethod: "credit_card"
};

updateOrderStatus(order, OrderStatus.Processing);
updateOrderStatus(order, OrderStatus.Shipped);

// これらはエラーになるべきです
updateOrderStatus(order, "Unknown");
const invalidOrder = {
  orderId: 12346,
  status: OrderStatus.Pending,
  paymentMethod: "bitcoin"  // エラー
};
```

### ヒント
- Enumは`enum Name { Value1, Value2 }`の形式で定義
- Literal Typesは`"value1" | "value2"`の形式で定義
- Enumは数値または文字列の値を持つことができます

---

## 問題7: Type AssertionsとNullable Types ⭐⭐

### 目的
Type Assertions（型アサーション）の使い方と、nullやundefinedを扱う方法を理解する。

### 問題
DOM要素を操作する関数を作成してください。

```typescript
// TODO: この関数に適切な型アノテーションを追加
// 引数はstringまたはnull、戻り値はnumberまたはnull
function getInputValue(elementId) {
  const element = document.getElementById(elementId);
  
  // TODO: 型アサーションを使用してHTMLInputElementとして扱う
  if (element) {
    const inputElement = element; // ここで型アサーション
    const value = inputElement.value;
    
    // 数値に変換できる場合は数値を返す
    const numValue = parseFloat(value);
    return isNaN(numValue) ? null : numValue;
  }
  
  return null;
}

// TODO: User型を定義（name, email, phone?）
// phoneはオプショナル

function printUserInfo(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  // TODO: phoneがundefinedでないことを確認してから出力
  if (user.phone) {
    console.log(`Phone: ${user.phone}`);
  }
}

const user1 = {
  name: "Alice",
  email: "alice@example.com",
  phone: "123-456-7890"
};

const user2 = {
  name: "Bob",
  email: "bob@example.com"
};

printUserInfo(user1);
printUserInfo(user2);
```

### ヒント
- Type Assertionは`value as Type`または`<Type>value`の形式
- Nullable typeは`Type | null`または`Type | undefined`
- オプショナルプロパティは自動的に`Type | undefined`となります
- Non-null assertion operator `!`も使用できますが、慎重に使用してください

---

## 問題8: 総合問題 - ユーザー管理システム ⭐⭐⭐

### 目的
これまで学んだすべての概念を組み合わせて実践的なシステムを構築する。

### 問題
ユーザー管理システムを作成してください。以下の要件を満たしてください。

```typescript
// TODO: UserRole enumを定義
// - Admin, Editor, Viewer

// TODO: User interfaceを定義
// - id: number (readonly)
// - username: string
// - email: string
// - role: UserRole
// - profile?: UserProfile (optional)

// TODO: UserProfile interfaceを定義
// - bio: string
// - website?: string
// - socialLinks: string[]

// TODO: この関数の型を定義
function createUser(username, email, role, profile) {
  const id = Math.floor(Math.random() * 10000);
  return { id, username, email, role, profile };
}

// TODO: ユーザーの権限をチェックする関数
function canEdit(user) {
  return user.role === UserRole.Admin || user.role === UserRole.Editor;
}

// TODO: ユーザー情報を検証する関数
function validateUser(user) {
  const errors = [];
  
  if (user.username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }
  
  if (!user.email.includes("@")) {
    errors.push("Invalid email format");
  }
  
  return errors.length === 0 ? null : errors;
}

// TODO: ユーザーIDで検索する関数（見つからない場合はnull）
function findUserById(users, id) {
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
console.log(validateUser(invalidUser)); // エラーメッセージの配列
```

### ヒント
- 複雑な型は小さな部品に分けて定義します
- 関数の戻り値が「値またはnull」の場合は`Type | null`を使用
- enumを使用することで、役割の値を制限できます
- interfaceは拡張可能で、再利用しやすい型定義に適しています

---

## 学習のポイント

1. **型アノテーションの重要性**: 明示的な型定義はコードの可読性と保守性を向上させます
2. **Union Typesの活用**: 複数の型を許容することで柔軟なAPIを設計できます
3. **InterfaceとType Aliasの使い分け**: 基本的にはどちらも使えますが、interfaceはオブジェクト型に、type aliasはunionやprimitiveの組み合わせに向いています
4. **Null安全性**: TypeScriptの型システムを活用してnull/undefinedによるエラーを防ぎます
5. **Enumsの適切な使用**: 値を特定のセットに制限したい場合に有用です

---

## 次のステップ

正答と解説は [Practice_Everyday_Types_Answer.md](./Practice_Everyday_Types_Answer.md) を参照してください。

すべての問題を解いたら、次の学習内容に進みましょう：
- Narrowing（型の絞り込み）
- More on Functions（より高度な関数の型）
- Object Types（より詳しいオブジェクト型）
