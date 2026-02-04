# 正答と解説：Modules

**対応学習日:** Day 22-24  
**参考資料:** [TypeScript Handbook - Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)

## モジュールシステムの正答例

### Export と Import
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './math';
```

### Default Exports
```typescript
// logger.ts
export default class Logger {
  log(message: string): void {
    console.log(message);
  }
}

// main.ts
import Logger from './logger';
```

### Re-exporting
```typescript
// index.ts
export { add } from './math';
export * from './utils';
```

### Type-only Imports
```typescript
import type { User } from './types';
```

**次:** [Practice_Type_Manipulation](./Practice_Type_Manipulation.md)
