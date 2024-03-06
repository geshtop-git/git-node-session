require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const session = require("express-session")

const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()
//middlewares
app.use(cors(corsOptions))
//app.use(cors())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000, sameSite: true }
  }))
app.use(express.json())
app.use(express.static("public"))


// Middleware to log session ID

//routes
app.get("/",(req,res)=>{
    res.send("this is the home page")
})
app.use("/api/products", require("./routes/productRoute"))
app.use("/api/baskets", require("./routes/basketRoute"))
//run
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})
