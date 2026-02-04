# 正答と解説：Type Manipulation

**対応学習日:** Day 25-26  
**参考資料:** [TypeScript Handbook - Type Manipulation](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

## 高度な型操作の正答例

### Keyof Type Operator
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### Indexed Access Types
```typescript
type AddressCity = Person["address"]["city"];
```

### Conditional Types
```typescript
type IsString<T> = T extends string ? true : false;
```

### Mapped Types
```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### Template Literal Types
```typescript
type Email = `${EmailPrefix}@${EmailDomain}`;
```

### ユーティリティ型の実装
```typescript
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
```

**学習完了！** 🎉 実践プロジェクトに進みましょう
