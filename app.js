const express = require("express")
const app = express()
require("dotenv").config()
require("./config/db.config")
require("./config/mysql.config")

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send("Hello node.js")
})

const blogRouter = require("./routers/blog.router")
const userRouter = require("./routers/user.router")

const { verifyToken } = require("./controllers/auth.controller")

app.use("/api/blog", verifyToken, blogRouter)
app.use("/api", userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server up and running on port ${process.env.PORT}`)
})