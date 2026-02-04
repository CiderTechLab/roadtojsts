# 正答と解説：Classes

**対応学習日:** Day 18-21  
**参考資料:** [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

## 主要なクラス機能の正答例

### Basic Class
```typescript
class Point {
  x: number;
  y: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  distance(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}
```

### Inheritance
```typescript
class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} is barking`);
  }
}
```

### Generic Classes
```typescript
class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
}
```

### Abstract Classes
```typescript
abstract class Shape {
  abstract getArea(): number;
  
  describe(): string {
    return `Area: ${this.getArea()}`;
  }
}
```

**次:** [Practice_Modules](./Practice_Modules)
