# 正答と解説：Object Types

**対応学習日:** Day 15-17  
**参考資料:** [TypeScript Handbook - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## 主要なオブジェクト型の正答例

### Property Modifiers
```typescript
interface Config {
  readonly apiKey: string;
  timeout?: number;
}
```

### Index Signatures
```typescript
interface StringMap {
  [key: string]: string;
}
```

### Extending Types
```typescript
interface Employee extends BasicPerson {
  employeeId: number;
}
```

### Intersection Types
```typescript
type ColorfulCircle = Colorful & Circle;
```

### Tuple Types
```typescript
function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  let value = initialValue;
  return [value, (newValue: T) => { value = newValue; }];
}
```

**次:** [Practice_Classes](./Practice_Classes)
