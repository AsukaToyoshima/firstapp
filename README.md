# 本アプリの概要
Expressで最低限のCRUD要件を満たしたアプリです。フロントはFirstAppをベースに、編集、削除のUIを追加しています。\n
MVCにファイル分割実施。ViewはEJS使用。DBはMongoDB Atlasを使用。


# 動作環境
- node.js：v16.20.2（20でも動作することを確認済み）
- npm：8.19.4

# 導入・動作確認手順

## 1. node.jsのインストール
[サイト](https://nodejs.org/en/download)からLTS版をダウンロード。

## 2. 本リポジトリのClone
本リポジトリをCloneし、任意の場所に配置してください。

## 3. パッケージのインストール
ターミナルでCloneしたアプリのディレクトリに移動し、`npm install`を実行する。

## 4. アプリの起動
ターミナルで`node index.js`を実行する。（nodemonでも可）