const PostModel = require("../../models/post")

// 削除処理
module.exports = async(req, res) => {
  try {
    await PostModel.deleteOne({_id: req.params.id}) //指定の投稿を削除
    console.log("データ削除に成功しました");
  } catch (error) {
    console.log("データ削除にエラーがありました")
  }
  res.redirect("/posts"); //トップページへ遷移
}