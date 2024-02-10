const PostModel = require("../../models/post")

// 投稿一覧（トップページ）表示
module.exports = async(req, res) => {
  const posts =  await PostModel.find(); //全ての投稿を取得
  res.render("allPosts", {posts})
}