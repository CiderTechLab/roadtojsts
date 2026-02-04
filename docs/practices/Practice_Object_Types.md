# 実践問題：Object Types

**対応学習日:** Day 15-17  
**参考資料:** [TypeScript Handbook - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)  
**難易度:** ⭐⭐⭐中級

---

## 問題の目的

オブジェクト型の詳細な機能を習得することを目的としています。

---

## 問題1: Property Modifiers

**問題文:** readonly と optional を使ったオブジェクト型を定義してください。

```typescript
interface Config {
  readonly apiKey: string;
  timeout?: number;
}
```

---

## 問題2: Index Signatures

**問題文:** インデックスシグネチャを使った動的なオブジェクト型を定義してください。

```typescript
interface StringMap {
  [key: string]: string;
}
```

---

## 問題3: Extending Types

**問題文:** インターフェースの継承を実装してください。

```typescript
interface BasicPerson {
  name: string;
}

interface Employee extends BasicPerson {
  employeeId: number;
}
```

---

## 問題4: Intersection Types

**問題文:** 複数の型を組み合わせてください。

```typescript
type Colorful = { color: string };
type Circle = { radius: number };
type ColorfulCircle = Colorful & Circle;
```

---

## 問題5: Generic Object Types

**問題文:** ジェネリックなオブジェクト型を定義してください。

```typescript
interface Box<T> {
  value: T;
}
```

---

## 問題6: Tuple Types

**問題文:** タプル型を使った関数を実装してください。

```typescript
function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  // React の useState のような関数
}
```

---

## 問題7: readonly Tuple Types

**問題文:** 読み取り専用のタプルを定義してください。

```typescript
function getCoordinates(): readonly [number, number] {
  return [10, 20];
}
```

---

## 問題8: 実践課題 - APIレスポンスの型定義

**問題文:** RESTful APIのレスポンス型を定義してください。

```typescript
// 成功レスポンス
interface SuccessResponse<T> {
  status: "success";
  data: T;
  timestamp: Date;
}

// エラーレスポンス
interface ErrorResponse {
  status: "error";
  error: {
    code: string;
    message: string;
  };
  timestamp: Date;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
```

---

[正答と解説ページ](./Practice_Object_Types_Answer)
