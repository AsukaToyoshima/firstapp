const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.use("/public", express.static("public"))

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://asukatoyoshima:techcamp@cluster0.wam4ecw.mongodb.net/blogUserDatabase?retryWrites=true&w=majority")
  .then(()=> { console.log("Success: Connected to MongoDB") })
  .catch((error)=>{ console.log("Failure: Unconnected to MongoDB") })

const Schema = mongoose.Schema
const PostSchema = new Schema({
  content: String,
  created_at: { type: Date, default: Date.now }, //タイムスタンプ(UTC)
})
const PostModel = mongoose.model("Post", PostSchema)

// Create
app.get("/posts/new", (req, res) => {
  res.render("new")
})

app.post("/posts", async (req, res) => {
  try {
    const savedDBData = await PostModel.create(req.body);
    console.log("データ登録に成功しました");
  } catch(error) {
    console.log("データ登録にエラーがありました")
  }
  res.redirect("/posts");
})

//Read
app.get("/posts", async(req, res) => {
  const posts =  await PostModel.find();
  res.render("index", {posts})
})

// Update
app.get("/posts/:id/edit", async(req, res) => {
  const post = await PostModel.findById(req.params.id)  
  res.render("edit", {post})
})  

app.post("/posts/:id/update", async(req, res) => {
  try {
    await PostModel.updateOne({_id: req.params.id}, req.body);
    console.log("データ更新に成功しました");
  }catch(error){
    console.log("データ更新にエラーがありました")
  }
  res.redirect("/posts");
})

// Delete
app.post("/posts/:id/delete", async(req, res) => {
  try {
    await PostModel.deleteOne({_id: req.params.id})
    console.log("データ削除に成功しました");
  } catch (error) {
    console.log("データ削除にエラーがありました")
  }
  res.redirect("/posts");
})


// Connecting to port
app.listen(5000, () => {
    console.log("Listening on localhost port 5000")
})

