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
const bcrypt = require('bcrypt')


const db = mongoose.connection
require('dotenv').config()


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

// use productController
app.use('/', usersController)
app.use('/', productController)

// Error / success
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("connected", () => console.log("mongod connected: "))
db.on("disconnected", () => console.log("mongod disconnected"))



//Listener

app.listen(PORT, () => console.log("express is listening on:", PORT))