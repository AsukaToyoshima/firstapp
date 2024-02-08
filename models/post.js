const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
  content: String,
  created_at: { type: Date, default: Date.now }, //タイムスタンプ(UTC)
})

const PostModel = mongoose.model("Post", PostSchema)
module.exports = PostModel