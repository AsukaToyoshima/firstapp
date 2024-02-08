const PostModel = require("../../models/post")

module.exports = async(req, res) => {
  try {
    await PostModel.deleteOne({_id: req.params.id})
    console.log("データ削除に成功しました");
  } catch (error) {
    console.log("データ削除にエラーがありました")
  }
  res.redirect("/posts");
}