const PostModel = require("../../models/post")


module.exports =  async(req, res) => {
  try {
    await PostModel.create(req.body);
    console.log("データ登録に成功しました");
  } catch(error) {
    console.log("データ登録にエラーがありました")
  }
  res.redirect("/posts");
}