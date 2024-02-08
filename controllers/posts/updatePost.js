const PostModel = require("../../models/post")

module.exports = async(req, res) => {
  try {
    await PostModel.updateOne({_id: req.params.id}, req.body);
    console.log("データ更新に成功しました");
  }catch(error){
    console.log("データ更新にエラーがありました")
  }
  res.redirect("/posts");
}