const PostModel = require("../../models/post")

module.exports = async(req, res) => {
  const post = await PostModel.findById(req.params.id)  
  res.render("updateGet", {post})
}