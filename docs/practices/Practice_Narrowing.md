# 実践問題：Narrowing

**対応学習日:** Day 8-10  
**参考資料:** [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)  
**難易度:** ⭐⭐⭐中級

---

## 問題の目的

型の絞り込み（Narrowing）の各種手法を習得し、Union型を安全に扱えるようになることを目的としています。

---

## 問題1: typeof Type Guards

**問題文:** 以下の関数を実装してください。

```typescript
function padLeft(value: string, padding: string | number): string {
  // 実装してください
}

padLeft("Hello", 4);      // "    Hello"
padLeft("Hello", ">>> "); // ">>> Hello"
```

---

## 問題2: Truthiness Narrowing

**問題文:** null/undefined をチェックする関数を実装してください。

```typescript
function printAll(strs: string | string[] | null): void {
  // strが null でない場合のみ処理
  // 文字列の場合と配列の場合で異なる処理
}
```

---

## 問題3: Equality Narrowing

**問題文:** 2つの値を比較して型を絞り込む関数を実装してください。

```typescript
function example(x: string | number, y: string | boolean) {
  // x === y の場合、どちらも string 型に絞り込まれる
}
```

---

## 問題4: in Operator Narrowing

**問題文:** オブジェクトのプロパティ存在チェックで型を絞り込んでください。

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  // "swim" in animal でチェック
}
```

---

## 問題5: instanceof Narrowing

**問題文:** クラスのインスタンスチェックを実装してください。

```typescript
function logValue(x: Date | string) {
  // Date のメソッドを安全に呼び出す
}
```

---

## 問題6: Type Predicates

**問題文:** カスタム型ガードを作成してください。

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  // 実装
}
```

---

## 問題7: Discriminated Unions

**問題文:** 判別可能なUnion型を実装してください。

```typescript
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  // kind で判別して面積を計算
}
```

---

## 問題8: Exhaustiveness Checking

**問題文:** すべてのケースを処理したことを保証してください。

```typescript
type Response = 
  | { status: "success"; data: string }
  | { status: "error"; error: Error }
  | { status: "loading" };

function handleResponse(response: Response) {
  // すべてのstatusを処理
  // 新しいstatusが追加されたらコンパイルエラーになるように
}
```

---

[正答と解説ページ](./Answer_Practice_Narrowing.md)
