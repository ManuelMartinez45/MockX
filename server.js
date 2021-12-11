//___________________
//Dependencies
//___________________
const express = require("express")
const app = express()
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const productController = require('./controllers/products.js')
const usersController = require('./controllers/users.js')
const session = require('express-session')
const expressFileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
const bcrypt = require('bcrypt')


const db = mongoose.connection

require('dotenv').config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


//___________________
//Port


const { MONGODB_URI, PORT, SECRET } = process.env


// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


//Middleware

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(methodOverride("_method")) 
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
)
app.use(expressFileUpload({ createParentPath: true }))

// use productController
app.use('/', usersController)
app.use('/', productController)

// Error / success
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("connected", () => console.log("mongod connected: "))
db.on("disconnected", () => console.log("mongod disconnected"))



//Listener

app.listen(PORT, () => console.log("express is listening on:", PORT))