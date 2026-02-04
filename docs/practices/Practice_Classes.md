# 実践問題：Classes

**対応学習日:** Day 18-21  
**参考資料:** [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)  
**難易度:** ⭐⭐⭐中級

---

## 問題の目的

TypeScriptにおけるクラスの定義と使用方法を習得することを目的としています。

---

## 問題1: Class Members

**問題文:** 基本的なクラスを定義してください。

```typescript
class Point {
  x: number;
  y: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  distance(): number {
    // 原点からの距離を計算
  }
}
```

---

## 問題2: readonly Properties

**問題文:** 読み取り専用プロパティを持つクラスを実装してください。

```typescript
class Person {
  readonly id: number;
  name: string;
  
  constructor(id: number, name: string) {
    // 実装
  }
}
```

---

## 問題3: Getters and Setters

**問題文:** アクセッサを使ったクラスを実装してください。

```typescript
class Temperature {
  private _celsius: number;
  
  get fahrenheit(): number {
    // 華氏に変換
  }
  
  set fahrenheit(value: number) {
    // 摂氏に変換して保存
  }
}
```

---

## 問題4: Class Heritage (extends)

**問題文:** クラスの継承を実装してください。

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  bark(): void {
    // 実装
  }
}
```

---

## 問題5: implements

**問題文:** インターフェースを実装するクラスを作成してください。

```typescript
interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  // 実装
}
```

---

## 問題6: Member Visibility

**問題文:** アクセス修飾子を適切に使用してください。

```typescript
class BankAccount {
  private balance: number;
  protected accountNumber: string;
  public ownerName: string;
  
  // メソッド実装
}
```

---

## 問題7: Static Members

**問題文:** 静的メンバーを持つクラスを実装してください。

```typescript
class MathUtils {
  static PI = 3.14159;
  
  static circleArea(radius: number): number {
    // 実装
  }
}
```

---

## 問題8: Generic Classes

**問題文:** ジェネリッククラスを実装してください。

```typescript
class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    // 実装
  }
  
  pop(): T | undefined {
    // 実装
  }
}
```

---

## 問題9: Abstract Classes

**問題文:** 抽象クラスを実装してください。

```typescript
abstract class Shape {
  abstract getArea(): number;
  
  describe(): string {
    return `Area: ${this.getArea()}`;
  }
}

class Rectangle extends Shape {
  // 実装
}
```

---

## 問題10: 実践課題 - ゲームキャラクター

**問題文:** RPGゲームのキャラクタークラスを実装してください。

```typescript
abstract class Character {
  protected name: string;
  protected hp: number;
  protected maxHp: number;
  
  abstract attack(target: Character): void;
  
  takeDamage(damage: number): void {
    // 実装
  }
  
  isAlive(): boolean {
    // 実装
  }
}

class Warrior extends Character {
  // 実装
}

class Mage extends Character {
  // 実装
}
```

---

[正答と解説ページ](./Answer_Practice_Classes.md)
