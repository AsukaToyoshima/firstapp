const PostModel = require("../../models/post")

// 投稿処理
module.exports =  async(req, res) => {
  try {
    await PostModel.create(req.body);   //投稿をデータベースに保存
    console.log("データ登録に成功しました");
  } catch(error) {
    console.log("データ登録にエラーがありました")
  }
  res.redirect("/posts"); //トップページへ遷移
}