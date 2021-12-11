// Dependencies
const productRouter = require('express').Router()
const Product = require('../models/product.js')
const productSeed = require('../models/productSeed.js')
const User = require('../models/user.js')


// ROUTES

// Seed
productRouter.get('/seed', (req,res) => {
    Product.deleteMany({}, (err, allProducts) => {})
    Product.create(productSeed, (err, data) => {
        res.redirect('/')
    })
})



// Search
productRouter.get('/search?', async (req,res) => {
    let searchTerm = req.query.search;
    if (searchTerm){
        const products = await Product.find({
            $or: [
                { brand: { $regex: searchTerm }},
                { name: { $regex: searchTerm }}
            ]
        })
        res.render('search.ejs', {
            products: products
        })
    } else{
        res.render('search.ejs')
    }
})



// Index
productRouter.get('/', async (req,res) => {
    const products = await Product.find({})
    const user = await User.findById(req.session.user)
    res.render('index.ejs', { products, user })
})

// New
productRouter.get('/sell', async (req,res) => {
    const user = await User.findById(req.session.user)
    res.render('new.ejs', { user })
})

// Delete
productRouter.delete('/:id', async (req,res) => {
   const product = await Product.findByIdAndDelete(req.params.id);
   res.redirect('/')
})

// Update
productRouter.put('/:id', async (req,res) => {
    for(let key in req.body){
        if(!req.body[key]) delete req.body[key]
    }
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true }
    )
    res.redirect(`/${req.params.id}`)
})

// Create
productRouter.post('/', async (req,res) => {
    const user = await User.findById(req.session.user)
    const product = await Product.create(req.body);
    res.redirect('/', { user })
    
})

// Edit
productRouter.get('/:id/edit', async (req,res) => {
    const user = await User.findById(req.session.user)
    const product = await Product.findById(req.params.id)
    res.render('edit.ejs', { product, user })
    
})

// Show
productRouter.get('/:id', async (req,res) => {
    const user = await User.findById(req.session.user)
    const product = await Product.findById(req.params.id)
    res.render('show.ejs', { product, user })
    
})

// Buy
productRouter.get('/:id/buy', async (req,res) => {
    const product = await Product.findById(req.params.id)
    if(product.qty){
        product.qty--
        await product.save()
        res.redirect(`/${product._id}`)
    }else{
        res.redirect(`/${product._id}`)
    }
})



module.exports = productRouter