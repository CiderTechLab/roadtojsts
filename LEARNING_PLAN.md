# RoadToTypeScript - 4週間学習計画

教材：**サバイバルTypeScript** (https://typescriptbook.jp/)

本計画は、**平日5日間、1日2時間**の学習時間を前提に、サバイバルTypeScriptの章立てに基づいて4週間でTypeScriptの基礎から応用までを学ぶプログラムです。

**週末は休息日**として、学んだ内容の定着や自主的な復習に充てることができます。

## 学習時間の構成（1日2時間）

- **理論学習（30-45分）**：リファレンスを読み、概念を理解
- **実践コーディング（60-75分）**：実際に`.ts`ファイルを作成し、コードを書く
- **復習・確認（15-30分）**：エラーを修正し、動作を確認、振り返り

---

## 学習方法のポイント（平日5日間、1日2時間向け）

### 1. **時間配分を守る**
   - **理論学習（30-45分）**：記事やリファレンスをじっくり読む
     - 理解できない部分は飛ばしてもOK
     - 大まかな概念を掴むことを優先
   - **実践コーディング（60-75分）**：必ず手を動かす
     - **毎日コードを手で書く**（`src/`ディレクトリに.tsファイルを作成）
     - コピペではなく、自分でタイピング
     - 各トピックについて実際に動作するコード例を作成
     - エラーが出たら、その原因を調べる
     - 複数のパターンを試す
   - **復習（15-30分）**：振り返りとメモ
     - 学んだことを簡単にメモ
     - 翌日の学習内容を確認

### 2. **学習の基本方針**
   - **完璧を目指さず、継続を重視** - 70%の理解で次に進む
   - **JavaScriptとの違いを意識**しながら学習
   - **実務で使う知識を優先的に習得**
   - 2時間確保できない日は**1時間だけでもOK**
   - 学習できない日があっても自己嫌悪しない
   - 次の日から再開すればよい

### 3. **週末の活用**
   - **完全休息でもOK**：リフレッシュを優先
   - **軽い復習**：平日に理解が浅かった部分を見直す
   - **自由な実験**：興味のあるトピックを深掘り
   - **小さなプロジェクト**：学んだ内容を組み合わせて何か作ってみる

### 4. **型エラーを学びのチャンスに**
   - エディターに表示される赤い波線は友達
   - エラーメッセージを読む習慣をつける
   - なぜエラーが出たのかを考える
   - 意図的にエラーを発生させて実験する

### 5. **効率的な学習テクニック**
   - **コードスニペット**を保存して再利用
   - よく使うパターンは**テンプレート化**
   - **VSCode の IntelliSense**（コード補完）を活用
   - わからないことは**Discord やコミュニティで質問**

### 6. **モチベーション維持**
   - 進捗をチェックリストで可視化
   - できたことを記録する（日記、ブログなど）
   - 学習仲間を見つける
   - 実務での活用イメージを持つ
   - **平日だけの学習でも4週間で完了できる**という自信を持つ

---

## **第1週：型の基礎と基本概念**

### Week 1 テーマ：TypeScriptとは何か、型システムの基本を理解する

#### **Day 1（2時間）：TypeScriptの概要と型推論**
- **理論学習（40分）**
  - [第2章 TypeScriptのあらまし](https://typescriptbook.jp/overview)を読む
  - TypeScriptとJavaScriptの関係を理解
  - [型推論](https://typescriptbook.jp/reference/values-types-variables/type-inference)について学ぶ
- **実践（65分）**
  - 環境構築の確認（Node.js, TypeScript のインストール確認）
  - `tsc --version`でバージョン確認
  - `src/day01-basics.ts`を作成
  - 型推論が働く例、型注釈が必要な例をコーディング
- **復習（15分）**
  - TypeScriptの利点と型推論の基本を整理

#### **Day 2（2時間）：プリミティブ型の完全理解**
- **理論学習（40分）**
  - [boolean](https://typescriptbook.jp/reference/values-types-variables/boolean)
  - [number](https://typescriptbook.jp/reference/values-types-variables/number)
  - [string](https://typescriptbook.jp/reference/values-types-variables/string)
  - [bigint](https://typescriptbook.jp/reference/values-types-variables/bigint)
  - [symbol](https://typescriptbook.jp/reference/values-types-variables/symbol)
  - [undefined と null](https://typescriptbook.jp/reference/values-types-variables/undefined)
- **実践（70分）**
  - `src/primitive-types.ts`を作成
  - すべてのプリミティブ型の変数宣言と型注釈
  - テンプレートリテラルの使用
  - 各型の組み込みメソッドを試す
- **復習（10分）**
  - 各プリミティブ型の特徴をまとめる

#### **Day 3（2時間）：型エイリアスと構造的部分型**
- **理論学習（40分）**
  - [型エイリアス](https://typescriptbook.jp/reference/values-types-variables/type-alias)
  - [構造的部分型](https://typescriptbook.jp/reference/values-types-variables/structural-subtyping)
- **実践（65分）**
  - `src/type-alias.ts`を作成
  - typeキーワードでカスタム型を定義
  - 構造的部分型の挙動を確認
  - 実用的な型エイリアスの例を作成
- **復習（15分）**
  - 型エイリアスの利点をまとめる

#### **Day 4（2時間）：配列の型定義**
- **理論学習（35分）**
  - [配列リテラル](https://typescriptbook.jp/reference/values-types-variables/array/array-literal)
  - [配列の型注釈](https://typescriptbook.jp/reference/values-types-variables/array/type-annotation-of-array)
  - [配列要素へのアクセス](https://typescriptbook.jp/reference/values-types-variables/array/how-to-access-elements-in-an-array)
  - [readonly配列](https://typescriptbook.jp/reference/values-types-variables/array/readonly-array)
- **実践（70分）**
  - `src/array.ts`を作成
  - 配列の宣言、型注釈、要素アクセス
  - 配列のループ処理
  - readonly配列の挙動確認
- **復習（15分）**
  - 型付き配列の利点を確認

#### **Day 5（2時間）：タプルと週の総復習**
- **理論学習（30分）**
  - [タプル型](https://typescriptbook.jp/reference/values-types-variables/tuple)
  - タプルと配列の違い
- **実践（75分）**
  - `src/tuple.ts`を作成
  - タプル型の定義と使用
  - 配列とタプルの違いを実験
  - Week 1で学んだ内容を使った総合演習
- **復習（15分）**
  - Week 1で学んだことを総復習し、理解度を確認

### Week 1 実装課題チェックリスト
- [ ] Day 1: TypeScriptの基本を理解し、型推論の動作を確認
- [ ] Day 2: すべてのプリミティブ型を使ったコード作成
- [ ] Day 3: 型エイリアスを使ったカスタム型の定義
- [ ] Day 4: 配列とreadonly配列の実装
- [ ] Day 5: タプル型を使ったコード作成と週の総復習

---

## **第2週：オブジェクト型と高度な型**

### Week 2 テーマ：複合型を使ったデータ構造の表現

#### **Day 1（2時間）：オブジェクト型の基礎と応用**
- **理論学習（40分）**
  - [オブジェクトリテラル](https://typescriptbook.jp/reference/values-types-variables/object/object-literal)
  - [オブジェクトの型注釈](https://typescriptbook.jp/reference/values-types-variables/object/type-annotation-of-objects)
  - [readonlyプロパティ](https://typescriptbook.jp/reference/values-types-variables/object/readonly-property)
  - [オプションプロパティ](https://typescriptbook.jp/reference/values-types-variables/object/optional-property)
- **実践（70分）**
  - `src/object-type.ts`を作成
  - オブジェクトの型注釈の書き方
  - readonly, オプショナル(?)の使用
  - 複雑なオブジェクト型の定義
- **復習（10分）**
  - オブジェクトの型定義の基本を確認

#### **Day 2（2時間）：インデックス型とMap/Set**
- **理論学習（40分）**
  - [インデックス型](https://typescriptbook.jp/reference/values-types-variables/object/index-signature)
  - [Mapオブジェクト](https://typescriptbook.jp/reference/builtin-api/map)
  - [Setオブジェクト](https://typescriptbook.jp/reference/builtin-api/set)
- **実践（70分）**
  - `src/object-type.ts`にインデックスシグネチャを追記
  - `src/map-set.ts`を作成
  - Mapの基本操作（set, get, has, delete）
  - Setの基本操作（add, has, delete）
- **復習（10分）**
  - オブジェクト、Map、Setの使い分けを考える

#### **Day 3（2時間）：列挙型とユニオン型**
- **理論学習（40分）**
  - [列挙型](https://typescriptbook.jp/reference/values-types-variables/enum)
  - [ユニオン型](https://typescriptbook.jp/reference/values-types-variables/union)
  - [判別可能なユニオン型](https://typescriptbook.jp/reference/values-types-variables/discriminated-union)
- **実践（70分）**
  - `src/enum.ts`を作成
  - 数値enumと文字列enumの実装
  - `src/union.ts`を作成
  - 基本的なユニオン型と判別可能なユニオン型
- **復習（10分）**
  - enumとユニオン型の使い分け

#### **Day 4（2時間）：型の絞り込みとインターセクション型**
- **理論学習（40分）**
  - [型の絞り込み](https://typescriptbook.jp/reference/statements/control-flow-analysis-and-type-guard)
  - [インターセクション型](https://typescriptbook.jp/reference/values-types-variables/intersection)
- **実践（70分）**
  - `src/union.ts`に型ガードを追記
  - typeof/instanceofによる型ガード
  - `src/intersection.ts`を作成
  - インターセクション型で複数の型を合成
- **復習（10分）**
  - 型の絞り込みとインターセクションの重要性を確認

#### **Day 5（2時間）：分割代入と週の総復習**
- **理論学習（30分）**
  - [配列の分割代入](https://typescriptbook.jp/reference/values-types-variables/array/destructuring-assignment-from-array)
  - [オブジェクトの分割代入](https://typescriptbook.jp/reference/values-types-variables/object/destructuring-assignment-from-objects)
- **実践（75分）**
  - `src/destructuring.ts`を作成
  - 配列の分割代入と型
  - オブジェクトの分割代入と型
  - ネストした分割代入
  - Week 2の内容を組み合わせた総合演習
- **復習（15分）**
  - Week 2の総復習

### Week 2 実装課題チェックリスト
- [ ] Day 1: 複雑なオブジェクト型の定義（readonly, optional含む）
- [ ] Day 2: インデックス型、MapとSetの基本操作を実装
- [ ] Day 3: enumとユニオン型を使った実用的なコード作成
- [ ] Day 4: 型の絞り込みとインターセクション型を実装
- [ ] Day 5: 分割代入を活用したコード記述と週の総復習

---

## **第3週：関数、クラス、例外処理**

### Week 3 テーマ：オブジェクト指向とクラスベースの開発

#### **Day 1（2時間）：関数の型定義**
- **理論学習（40分）**
  - [関数宣言](https://typescriptbook.jp/reference/functions/function-declaration)
  - [アロー関数](https://typescriptbook.jp/reference/functions/arrow-functions)
  - [オプション引数](https://typescriptbook.jp/reference/functions/optional-parameters)
  - [デフォルト引数](https://typescriptbook.jp/reference/functions/default-parameters)
  - [残余引数](https://typescriptbook.jp/reference/functions/rest-parameters)
- **実践（70分）**
  - `src/functions.ts`を作成
  - 様々な関数パターンの型注釈
  - オプション引数、デフォルト引数、残余引数の実装
- **復習（10分）**
  - 関数の型注釈の基本を確認

#### **Day 2（2時間）：型ガード関数**
- **理論学習（40分）**
  - [型ガード関数](https://typescriptbook.jp/reference/functions/type-guard-functions)
  - type predicateの使い方
  - [制御フロー分析](https://typescriptbook.jp/reference/statements/control-flow-analysis-and-type-guard)
- **実践（70分）**
  - `src/type-guards.ts`を作成
  - is演算子を使った型ガード関数
  - 実用的な型判定関数の作成
  - カスタム型ガードの実装
- **復習（10分）**
  - 型ガードの利点を確認

#### **Day 3（2時間）：クラスの基礎**
- **理論学習（40分）**
  - [クラス](https://typescriptbook.jp/reference/object-oriented/class)
  - [フィールド](https://typescriptbook.jp/reference/object-oriented/class/fields)
  - [静的フィールド](https://typescriptbook.jp/reference/object-oriented/class/static-fields)
  - [静的メソッド](https://typescriptbook.jp/reference/object-oriented/class/static-methods)
- **実践（70分）**
  - `src/class-basic.ts`を作成
  - 基本的なクラスの定義
  - インスタンスメンバーと静的メンバー
  - メソッドチェーンの実装
- **復習（10分）**
  - クラスの基本構造を確認

#### **Day 4（2時間）：アクセス修飾子とカプセル化**
- **理論学習（40分）**
  - [アクセス修飾子](https://typescriptbook.jp/reference/object-oriented/class/access-modifiers)
  - [readonly修飾子](https://typescriptbook.jp/reference/object-oriented/class/readonly-modifier-in-classes)
  - [constructor shorthand](https://typescriptbook.jp/reference/object-oriented/class/constructor-shorthand)
- **実践（70分）**
  - `src/class-access.ts`を作成
  - public, private, protectedの使用
  - readonlyプロパティ
  - constructor shorthandの活用
  - 実用的なクラス設計の演習
- **復習（10分）**
  - カプセル化の重要性を確認

#### **Day 5（2時間）：例外処理と週の総復習**
- **理論学習（35分）**
  - [例外処理](https://typescriptbook.jp/reference/statements/exception)
  - try-catch-finally構文
  - Errorクラスの継承
- **実践（70分）**
  - `src/exception-handling.ts`を作成
  - try-catch-finallyの実装
  - カスタムエラークラスの作成
  - エラーハンドリングのパターン
  - Week 3の内容を組み合わせた総合演習
- **復習（15分）**
  - Week 3の総復習

### Week 3 実装課題チェックリスト
- [ ] Day 1: 型安全な関数の実装（様々な引数パターン）
- [ ] Day 2: 型ガード関数を使った型の絞り込み
- [ ] Day 3: クラスの基本構造と静的メンバーの実装
- [ ] Day 4: アクセス修飾子を使ったカプセル化の実装
- [ ] Day 5: エラーハンドリングの実装と週の総復習

---

## **第4週：高度なトピックと実践**

### Week 4 テーマ：非同期処理、ジェネリクス、型レベルプログラミング

#### **Day 1（2時間）：非同期処理の基礎**
- **理論学習（40分）**
  - [Promise](https://typescriptbook.jp/reference/asynchronous/promise)
  - [async関数](https://typescriptbook.jp/reference/asynchronous/async)
  - [await構文](https://typescriptbook.jp/reference/asynchronous/await)
- **実践（70分）**
  - `src/async.ts`を作成
  - Promiseの作成と.then()/.catch()
  - async/await構文の実装
  - try-catchでのエラーハンドリング
  - Promise.allによる並列実行
- **復習（10分）**
  - 非同期処理の基本を確認

#### **Day 2（2時間）：インターフェース**
- **理論学習（35分）**
  - [インターフェース](https://typescriptbook.jp/reference/object-oriented/interface)
  - 型エイリアスとの違い
  - インターフェースの拡張
- **実践（70分）**
  - `src/interface.ts`を作成
  - インターフェースの定義
  - クラスでのimplements
  - インターフェースの継承
  - 実用的なインターフェース設計
- **復習（15分）**
  - typeとinterfaceの使い分け

#### **Day 3（2時間）：ジェネリクスの基本と応用**
- **理論学習（40分）**
  - [ジェネリクス](https://typescriptbook.jp/reference/generics)
  - [型変数](https://typescriptbook.jp/reference/generics/type-variables)
  - ジェネリクスの制約
- **実践（70分）**
  - `src/generics.ts`を作成
  - ジェネリック関数の定義
  - extendsを使った制約付きジェネリクス
  - ジェネリッククラスの実装
  - 再利用可能なユーティリティ関数
- **復習（10分）**
  - ジェネリクスの利点を確認

#### **Day 4（2時間）：モジュールシステム**
- **理論学習（35分）**
  - [モジュール](https://typescriptbook.jp/reference/modules)
  - export/import
  - default export
- **実践（75分）**
  - `src/math-utils.ts`を作成（export側）
  - `src/modules-main.ts`を作成（import側）
  - 名前付きexport/import
  - default export/import
  - 型のexport/import
  - モジュールを使った小規模なプロジェクト構成
- **復習（10分）**
  - モジュールシステムの利点を確認

#### **Day 5（2時間）：型レベルプログラミングと総復習**
- **理論学習（40分）**
  - [typeof型演算子](https://typescriptbook.jp/reference/type-reuse/typeof-type-operator)
  - [keyof型演算子](https://typescriptbook.jp/reference/type-reuse/keyof-type-operator)
  - [ユーティリティ型](https://typescriptbook.jp/reference/type-reuse/utility-types)（Partial, Required, Pick, Omit）
- **実践（70分）**
  - `src/type-programming.ts`を作成
  - typeofとkeyofの使用
  - 基本的なユーティリティ型の活用
  - 実用的な型変換の例
  - Week 4全体の総合演習
- **復習（10分）**
  - 4週間の総復習

### Week 4 実装課題チェックリスト
- [ ] Day 1: async/awaitを使った非同期処理の実装
- [ ] Day 2: インターフェースを使った型定義
- [ ] Day 3: ジェネリクスを活用した再利用可能な関数・クラス
- [ ] Day 4: 複数のモジュールを組み合わせたプロジェクト
- [ ] Day 5: ユーティリティ型を使った型変換と4週間の総復習

---

## 発展的な学習（5週目以降）

4週間の基礎学習が完了したら、以下のトピックに進むことをお勧めします：

### 週5-6：クラスの高度な機能とデザインパターン
- **クラスの継承**：https://typescriptbook.jp/reference/object-oriented/class/class-inheritance
- **抽象クラス**：https://typescriptbook.jp/reference/object-oriented/class/abstract-class
- **ゲッターとセッター**：https://typescriptbook.jp/reference/object-oriented/class/getter-and-setter
- **デザインパターンの実装**（Singleton, Factory など）

### 週7-8：高度な型システム
- **条件型（Conditional Types）**：https://typescriptbook.jp/reference/type-reuse/conditional-types
- **Mapped Types**：https://typescriptbook.jp/reference/type-reuse/mapped-types
- **Template Literal Types**
- **インデックスアクセス型**：https://typescriptbook.jp/reference/type-reuse/indexed-access-types

### 週9-10：実務的なトピック
- **型安全なAPI通信**の実装
- **テスト**の書き方（Jest, Vitest）
- **設定ファイル**（tsconfig.json の詳細）
- **実務的なTips**：https://typescriptbook.jp/tips

### 週11-12：フレームワークでの実践
- **React + TypeScript**
- **Vue + TypeScript**
- **Node.js + Express + TypeScript**
- 実際のプロジェクト開発

---

## 学習時間の目安（参考）

- **4週間（基礎完了）**：約40時間（20日 × 2時間）
- **8週間（応用完了）**：約80時間（40日 × 2時間）
- **12週間（実践完了）**：約120時間（60日 × 2時間）

※ 上記は目安です。個人のペースで調整してください。
※ 週末は休息日として、または学んだ内容の復習に使用できます。

---

## 進捗管理

各週のセクションのチェックボックスを埋めることで進捗を管理してください。

## 参考リソース

- 公式サイト：https://typescriptbook.jp/
- GitHub：https://github.com/yytypescript/book
- 型解読アシスタント：https://typescriptbook.jp/code-reading-assistant

---

## ライセンスとクレジット

### 本学習計画について

この学習計画は、[サバイバルTypeScript](https://typescriptbook.jp/)（YYTypeScript著、[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ja)）を教材として参照し、独自に構成した学習スケジュールです。教材本文・説明文・コードは一切含まれていません。

- **本学習計画のライセンス**:
- 学習計画本文：MIT License
- 参照教材：サバイバルTypeScript（CC BY-SA 4.0）

- **教材**: [サバイバルTypeScript](https://typescriptbook.jp/) (CC BY-SA 4.0)
- **著作者**: YYTypeScript

### 使用許諾

本学習計画は以下の用途で自由にご利用いただけます：
- 個人の学習
- 社内勉強会・研修
- 教育機関での利用
- 二次配布・改変（MIT Licenseの範囲内）

### 免責事項

本学習計画は学習の参考として提供されるものであり、内容の完全性や正確性を保証するものではありません。
