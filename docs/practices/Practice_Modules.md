# 実践問題：Modules

**対応学習日:** Day 22-24  
**参考資料:** [TypeScript Handbook - Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)  
**難易度:** ⭐⭐中級

---

## 問題の目的

TypeScriptのモジュールシステムを理解し、適切にコードを分割できるようになることを目的としています。

---

## 問題1: Export と Import

**問題文:** 基本的なexport/importを実装してください。

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './math';
```

---

## 問題2: Default Exports

**問題文:** デフォルトエクスポートを使用してください。

```typescript
// logger.ts
export default class Logger {
  log(message: string): void {
    // 実装
  }
}

// main.ts
import Logger from './logger';
```

---

## 問題3: Re-exporting

**問題文:** 複数のモジュールを統合してエクスポートしてください。

```typescript
// index.ts
export { add, subtract } from './math';
export { Logger } from './logger';
export * from './utils';
```

---

## 問題4: Type-only Imports

**問題文:** 型のみをインポートしてください。

```typescript
import type { User } from './types';
```

---

## 問題5: 実践課題 - モジュール構成

**問題文:** 実践的なモジュール構成を設計してください。

```
src/
  ├── types/
  │   ├── user.ts
  │   └── index.ts
  ├── utils/
  │   ├── validation.ts
  │   └── index.ts
  ├── services/
  │   ├── userService.ts
  │   └── index.ts
  └── index.ts
```

---

[正答と解説ページ](./Practice_Modules_Answer)
