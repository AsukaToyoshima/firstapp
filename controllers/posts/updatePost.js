const PostModel = require("../../models/post")

// 更新処理
module.exports = async(req, res) => {
  try {
    await PostModel.updateOne({_id: req.params.id}, req.body); //指定の投稿をreq.bodyの値で保存
    console.log("データ更新に成功しました");
  }catch(error){
    console.log("データ更新にエラーがありました")
  }
  res.redirect("/posts"); //トップページへ遷移
}