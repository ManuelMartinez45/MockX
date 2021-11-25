// Dependencies
const productRouter = require('express').Router()
const Product = require('../models/product.js')
const productSeed = require('../models/productSeed.js')

// ROUTES

// Seed
productRouter.get('/seed', (req,res) => {
    Product.deleteMany({}, (err, allProducts) => {})
    Product.create(productSeed, (err, data) => {
        res.redirect('/')
    })
})
// Index
productRouter.get('/', (req,res) => {
    Product.find({}, (err, allProducts) => {
        console.log(allProducts)
        res.render('index.ejs', {
            products: allProducts
        })
    })
    
})

module.exports = productRouter