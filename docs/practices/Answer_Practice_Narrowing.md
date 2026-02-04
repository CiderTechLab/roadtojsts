# 正答と解説：Narrowing

**対応学習日:** Day 8-10  
**参考資料:** [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

---

## 主要な型の絞り込み手法の正答例

### typeof Type Guards

```typescript
function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}
```

### in Operator Narrowing

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

### Type Predicates

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

### Discriminated Unions

```typescript
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

### Exhaustiveness Checking

```typescript
function handleResponse(response: Response): string {
  switch (response.status) {
    case "success":
      return response.data;
    case "error":
      return response.error.message;
    case "loading":
      return "Loading...";
    default:
      const _exhaustiveCheck: never = response;
      return _exhaustiveCheck;
  }
}
```

**次:** [Practice_More_on_Functions](./Practice_More_on_Functions.md)
