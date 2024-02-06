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
app.get("/posts", (req, res) => {
  res.send("こんにちは");
})

// Update
// app.get("/blog/update/:id", async(req, res) => {
//   const singleBlog = await BlogModel.findById(req.params.id)  
//   res.render("blogUpdate", {singleBlog})
// })  

// app.post("/blog/update/:id", (req, res) => {
//   BlogModel.updateOne({_id: req.params.id}, req.body).exec((error) => {
//       if(error){
//           res.render("error", {message: "/blog/updateのエラー"})
//       }else{
//           res.redirect("/")
//       }
//   })
// })

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

