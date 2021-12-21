// Dependencies
const productRouter = require('express').Router()
const Product = require('../models/product.js')
const productSeed = require('../models/productSeed.js')
const User = require('../models/user.js')
const cloudinary = require('cloudinary').v2


const brandLogos = {
    jordan: 'https://www.nicekicks.com/files/2020/06/air-jordan-jumpman-logo.jpg',
    adidas: 'https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg',
    nike: 'https://thumbs.dreamstime.com/b/web-183282388.jpg',
    yeezy: 'https://1000logos.net/wp-content/uploads/2017/08/Logo-Yeezy.jpg'
    }

// ROUTES

// Seed
productRouter.get('/seed', (req,res) => {
    Product.deleteMany({}, (err, allProducts) => {})
    Product.create(productSeed, (err, data) => {
        res.redirect('/')
    })
})



// Search
productRouter.get('/search', async (req,res) => {
    const user = await User.findById(req.session.user)
    let searchTerm = req.query.search;
    if (searchTerm){
        const products = await Product.find({
            $or: [
                { brand: { $regex: searchTerm }},
                { name: { $regex: searchTerm }}
            ]
        })
        res.render('search.ejs', {
            products: products,
            user: user
        })
    } else{
        res.render('search.ejs')
    }
})

// Brand BreadCrumb 
productRouter.get('/search/:breadcrumb', async (req,res) => {
    const products = await Product.find({
        $or: [
            { brand: req.params.breadcrumb},
            { subtype: req.params.breadcrumb}
        ]
    })
    const user = await User.findById(req.session.user)
    res.render('breadcrumb.ejs', { products, user })
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
    const image = req.files?.img
    if(image) {
        image.mv(`./uploads/${image.name}`)
        const result = await cloudinary.uploader.upload(`./uploads/${image.name}`)
        req.body.img = result.secure_url;
    }

    await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true }
    )
    res.redirect(`/${req.params.id}`)
})

// Create
productRouter.post('/',async (req,res) => {
    const image = req.files.img
    image.mv(`./uploads/${image.name}`)
    const result = await cloudinary.uploader.upload(`./uploads/${image.name}`)
    req.body.img = result.secure_url;
    const product = await Product.create(req.body)
    res.redirect('/')

    // cloudinary.uploader.upload(`./uploads/${image.name}`).then(result => {
    //     req.body.img = result.secure_url;
    //     Product.create(req.body, (err, book) => {
    //         res.redirect('/')
    //     })
    // }).catch(err => console.log(err))
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
    product.brandLogo = brandLogos[product.brand.toLowerCase()]
    res.render('show.ejs', { product, user})
    
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