//___________________
//Dependencies
//___________________
const express = require("express")
const app = express()
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const productController = require('./controllers/products.js')
const Product = require('./models/product.js')
const productSeed = require('./models/productSeed')

const db = mongoose.connection
require('dotenv').config()


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI

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

// use productController
app.use('/', productController)

// Error / success
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("connected", () => console.log("mongod connected: "))
db.on("disconnected", () => console.log("mongod disconnected"))



//Listener

app.listen(PORT, () => console.log("express is listening on:", PORT))