const usersRouter = require('express').Router();
const User = require('../models/user.js')

const Product = require('../models/product.js')

const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

usersRouter.get('/login', async (req,res) => {
    const user = await User.findById(req.session.user)
    res.render('login.ejs', { user })
})

usersRouter.post('/login', async (req,res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.render('login.ejs', { user: req.session.user, err: 'invalid credentials' })
    if(!bcrypt.compareSync(req.body.password, user.password)){
        return res.render('login.ejs', { user: req.session.user, err: 'invalid credentials' })
    }
    req.session.user = user._id
    res.redirect('/dashboard')
})

usersRouter.get('/signup', async (req,res) => {
    const user = await User.findById(req.session.user)
    res.render('signup.ejs', { user })
})

usersRouter.post('/signup', async (req,res) => {
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS))
    req.body.password = hash
    User.create(req.body, (err, user) => {
        req.session.user = user._id 
        res.redirect('/dashboard') 
    })
})

usersRouter.get('/logout', (req,res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

usersRouter.get('/delete', async (req,res) => {
    const users = await User.deleteMany({})
    res.redirect('/')
})


usersRouter.get('/dashboard', async (req,res) => {
    const products = await Product.find({})
    if(!req.session.user) return res.redirect('/login');
    User.findById(req.session.user, (err, user) => {
        delete user.password
        res.render('dashboard.ejs', { user: user, products })
    })
})


module.exports = usersRouter