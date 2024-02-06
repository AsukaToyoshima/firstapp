const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))

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
  res.sendFile(__dirname+"/views/new.html")
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
  console.log(posts)
  res.send("一覧ページ")
})

// Update
app.get("/posts/:id/edit", async(req, res) => {
  const post = await PostModel.findById(req.params.id)  
  console.log(post)
  res.send("編集ページ")
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
// app.get("/blog/delete/:id", async(req, res) => {
//   const singleBlog = await BlogModel.findById(req.params.id)  
//   res.render("blogDelete", {singleBlog})
// })

// app.post("/blog/delete/:id", (req, res) => {
//   BlogModel.deleteOne({_id: req.params.id}).exec((error) => {
//       if(error){
//           res.render("error", {message: "/blog/deleteのエラー"})
//       }else{
//           res.redirect("/")
//       }
//   })
// })


// Connecting to port
app.listen(5000, () => {
    console.log("Listening on localhost port 5000")
})

