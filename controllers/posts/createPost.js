//prisma読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 投稿処理
module.exports =  async(req, res) => {
  try {
    await prisma.posts.create({data: {content: req.body.content}});   //投稿をデータベースに保存。createの引数は{data: req.body}でも可。
    console.log("データ登録に成功しました");
  } catch(error) {
    console.log("データ登録にエラーがありました")
    console.log(error)
  }
  res.redirect("/posts"); //トップページへ遷移
}