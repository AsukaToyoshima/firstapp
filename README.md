# 本アプリの概要
Expressで最低限のCRUD要件を満たしたアプリです。フロントはFirstAppをベースに、編集、削除のUIを追加しています。\n
MVCにファイル分割実施。Viewは、DBはMongoDB Atlasを使用。


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

## 4. データベースの作成

ターミナルでpostgresqlに接続し、ロール、データベースを作成してください。
ロール名とパスワードがわかれば、作成の手順は飛ばしても大丈夫です。
```
psql postgres  // postgresというデフォルトのロールでpostgresqlに入る

CREATE ROLE ‘《ロール名》’ WITH LOGIN PASSWORD ’《パスワード》’; // ロールを作成する。

\du     //ロールが作成できているか確認する

CREATE DATABASE firstapp_prisma WITH OWNER 《ロール名》;    //先ほど作成したロールをオーナーに指定し、データベースを作成
```

## 5. データベースとアプリの接続設定を書き換える

.envのDATABASE_URLの値を、以下のように修正する。
```
DATABASE_URL="postgresql://《先ほど用意したロール名》:《ロールのパスワード》@localhost:5432/firstapp_prisma
```
## 6. マイグレート

以下のコマンドを実行し、マイグレートを実行してください。
```
npx prisma migrate reset
```

## 7. アプリの起動
ターミナルで`node index.js`を実行する。（nodemonでも可）

## 8. ブラウザで接続
ブラウザで`localhost:5000/posts`にアクセス。