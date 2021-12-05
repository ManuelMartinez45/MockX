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
        res.render('index.ejs', {
            products: allProducts
        })
    })
})

// New
productRouter.get('/sell', (req,res) => {
    res.render('new.ejs')
})

// Delete
productRouter.delete('/:id', (req,res) => {
    Product.findByIdAndDelete(req.params.id, (err, product) => {
        res.redirect('/')
    })
})

// Update
productRouter.put('/:id', (req,res) => {
    for(let key in req.body){
        if(!req.body[key]) delete req.body[key]
    }
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, product) => {
            res.redirect(`/${req.params.id}`)
        }
    )
})

// Create
productRouter.post('/', (req,res) => {
    Product.create(req.body, (err, newProduct) => {
        res.redirect('/')
    })
})

// Edit
productRouter.get('/:id/edit', (req,res) => {
    Product.findById(req.params.id, (err, product) => {
        res.render('edit.ejs', {
            product: product
        })
    })
})
// Show
productRouter.get('/:id', (req,res) => {
    Product.findById(req.params.id, (err, product) => {
        res.render('show.ejs', {
            product: product
        })
    })
})

// Buy
productRouter.get('/:id/buy', (req,res) => {
    Product.findById(req.params.id, (err, product) => {
        if(product.qty){
            product.qty--
            product.save(() => {
                res.redirect(`/${product._id}`)
            })
        }else{
            res.redirect(`/${product._id}`)
        }
    })
})



module.exports = productRouter