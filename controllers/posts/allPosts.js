const PostModel = require("../../models/post")

module.exports = async(req, res) => {
  const posts =  await PostModel.find();
  res.render("allPosts", {posts})
}