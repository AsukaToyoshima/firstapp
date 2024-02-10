const PostModel = require("../../models/post")

// 更新画面表示
module.exports = async(req, res) => {
  const post = await PostModel.findById(req.params.id)   //指定の投稿を取得
  res.render("updateGet", {post})
}