# README.md

![License](https://img.shields.io/badge/License-MIT-blue.svg?logo=github)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

ようこそ「JS&amp;TS&nbsp;学習まとめノート」へ！
このリポジトリは私のJavaScript並びにTypeScriptの練習記録です。

**Welcome to "JS&amp;TS&nbsp;Learning Summary Notes"!**
This repository is my JavaScript and TypeScript practice log.

---

# サイト要件

## 目的

当サイトはJavaScriptとTypeScriptの写経を通じて言語の実践的な理解を深め、チートシートを制作することで体系化した知識を得ることを目的としています。

## 対象ユーザー

- これからJavaScriptとTypeScriptを学びたいと考えている人
- JavaScriptとTypeScriptを学習中の初心者
- JavaScriptとTypeScriptの知識を整理したい人

---

# 設計要件

## 設計方針

[CiderTechLabのREADME.md](https://github.com/CiderTechLab/cidertechlab.github.io/blob/main/README.md)に準じます。

### 具体的な実装手段

- JavaScriptとTypeScriptのコードを写経し、実際に動作させることで理解を深める。
- チートシートを作成し、学習した内容を整理する。
- チートシートのレイアウトは生成AI(GitHub Copilot:Claude Haiku)とペアプログラミングを行い、効率的に制作を進める。
- [Tailwind CSS](https://tailwindcss.com/)も使用し、効率的にデザインを行う。
- エラーが発生したら、原因を生成AIと共に調査した上で解決する。

## 機能要件

- ヘッダー・フッターの設置
- 目次の設置

## 非機能要件

[CiderTechLabのREADME.md](https://github.com/CiderTechLab/cidertechlab.github.io/blob/main/README.md)に準じます。

## ブランチ構成

| ブランチ名 | 用途                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------ |
| main       | 本リポジトリはプログラミング言語学習が目的のため、mainリポジトリのみの構成としております。 |

## ディレクトリ構成

- js
  - 学習に使用した、JavaScriptのソースコードが格納されています。
- ts
  - src
    - 学習に使用した、TypeScriptのソースコードが格納されています。
  - dist
    - TypeScriptからコンパイルされたJavaScriptソースコードが格納されます。
    - 学習目的のため、コンパイル後のコードも確認できるよう格納しております。
- docs
  - GitHub Pages用のプロジェクトサイト（チートシート）の内容が格納されています。

---

# 参考情報

このページは以下の書籍を参考に、私が独自に編集しました。

| 著者                                                       | 書籍名                                                                                                            | 出版社               | 私の感想                                                                                               |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------ |
| [CodeMafia 外村 将大](https://d.codemafia.tech/my-profile) | [『独習JavaScript 新版』](https://www.shoeisha.co.jp/book/detail/9784798160276)                                   | 翔泳社               | 内容が簡潔にまとめられており読みやすく、JavaScriptの初級者を脱出して中級者を目指す方に適しています。   |
| [Josh Goldberg](https://www.joshuakgoldberg.com/)          | [『初めてのTypeScriptーー型安全なJavaScriptでWeb開発を加速する』](https://www.oreilly.co.jp/books/9784814400362/) | オライリー・ジャパン | TypeScriptの基礎が丁寧に解説されており、JavaScriptからTypeScriptへの移行を考えている方に適しています。 |

---

# ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細はLICENSEファイルをご覧ください。

This project is licensed under the MIT License, see the [LICENSE file](LICENSE) for details.
