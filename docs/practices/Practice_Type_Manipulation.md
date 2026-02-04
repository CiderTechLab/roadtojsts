# 実践問題：Type Manipulation

**対応学習日:** Day 25-26  
**参考資料:** [TypeScript Handbook - Type Manipulation](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)  
**難易度:** ⭐⭐⭐⭐上級

---

## 問題の目的

TypeScriptの高度な型操作を習得し、より柔軟で型安全なコードを書けるようになることを目的としています。

---

## 問題1: Keyof Type Operator

**問題文:** keyof を使った関数を実装してください。

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

## 問題2: Typeof Type Operator

**問題文:** typeof を使って型を抽出してください。

```typescript
const person = {
  name: "Alice",
  age: 30
};

type Person = typeof person;
```

---

## 問題3: Indexed Access Types

**問題文:** インデックスアクセス型を使用してください。

```typescript
type Person = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
};

type AddressCity = Person["address"]["city"];
```

---

## 問題4: Conditional Types

**問題文:** 条件型を実装してください。

```typescript
type IsString<T> = T extends string ? true : false;
```

---

## 問題5: Mapped Types

**問題文:** マップ型を作成してください。

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

---

## 問題6: Template Literal Types

**問題文:** テンプレートリテラル型を使用してください。

```typescript
type EmailPrefix = "user" | "admin" | "support";
type EmailDomain = "example.com" | "test.com";
type Email = `${EmailPrefix}@${EmailDomain}`;
```

---

## 問題7: 実践課題 - ユーティリティ型の実装

**問題文:** 組み込みユーティリティ型を自分で実装してください。

```typescript
// Partial<T> の実装
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Pick<T, K> の実装
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit<T, K> の実装
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
```

---

[正答と解説ページ](./Practice_Type_Manipulation_Answer)
