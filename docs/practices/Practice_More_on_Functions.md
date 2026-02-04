# 実践問題：More on Functions

**対応学習日:** Day 11-14  
**参考資料:** [TypeScript Handbook - More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)  
**難易度:** ⭐⭐⭐中級

---

## 問題の目的

関数の高度な型定義、ジェネリクス、オーバーロードを習得することを目的としています。

---

## 問題1: Function Type Expressions

**問題文:** 関数の型を定義してください。

```typescript
type GreetFunction = /* 型定義 */;

const greet: GreetFunction = (name) => {
  return `Hello, ${name}!`;
};
```

---

## 問題2: Call Signatures

**問題文:** 呼び出し可能なオブジェクトの型を定義してください。

```typescript
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
```

---

## 問題3: Generic Functions

**問題文:** 汎用的な関数を実装してください。

```typescript
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

---

## 問題4: Constraints

**問題文:** ジェネリクスに制約を付けてください。

```typescript
function longest<T extends { length: number }>(a: T, b: T): T {
  // length プロパティを持つ型のみ受け入れる
}
```

---

## 問題5: Optional Parameters

**問題文:** オプショナルパラメータを使った関数を実装してください。

```typescript
function buildName(firstName: string, lastName?: string): string {
  // 実装
}
```

---

## 問題6: Function Overloads

**問題文:** 関数オーバーロードを実装してください。

```typescript
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
  // 実装
}
```

---

## 問題7: Rest Parameters

**問題文:** 可変長引数を受け取る関数を実装してください。

```typescript
function multiply(base: number, ...factors: number[]): number {
  // すべてのfactorを掛け合わせる
}
```

---

## 問題8: 実践課題 - Utility Functions

**問題文:** 汎用的なユーティリティ関数を実装してください。

```typescript
// 配列をn個ずつのチャンクに分割
function chunk<T>(array: T[], size: number): T[][];

// 配列から重複を除去
function unique<T>(array: T[]): T[];

// 配列をグループ化
function groupBy<T, K extends string | number>(
  array: T[], 
  keyFn: (item: T) => K
): Record<K, T[]>;
```

---

[正答と解説ページ](./Answer_Practice_More_on_Functions.md)
