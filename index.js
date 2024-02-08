const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.use("/public", express.static("public"))

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://asukatoyoshima:techcamp@cluster0.wam4ecw.mongodb.net/blogUserDatabase?retryWrites=true&w=majority")
  .then(()=> { console.log("Success: Connected to MongoDB") })
  .catch((error)=>{ console.log("Failure: Unconnected to MongoDB") })

const routers = require("./routes")
app.use(routers)

app.listen(5000, () => {
    console.log("Listening on localhost port 5000")
})

