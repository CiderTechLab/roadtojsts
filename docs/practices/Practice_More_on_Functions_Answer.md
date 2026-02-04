# 正答と解説：More on Functions

**対応学習日:** Day 11-14  
**参考資料:** [TypeScript Handbook - More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

## 主要な関数型の正答例

### Generic Functions
```typescript
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

### Constraints
```typescript
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
```

### Function Overloads
```typescript
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
  if (month !== undefined && day !== undefined) {
    return new Date(yearOrTimestamp, month - 1, day);
  }
  return new Date(yearOrTimestamp);
}
```

### Rest Parameters
```typescript
function multiply(base: number, ...factors: number[]): number {
  return factors.reduce((acc, f) => acc * f, base);
}
```

**次:** [Practice_Object_Types](./Practice_Object_Types)
