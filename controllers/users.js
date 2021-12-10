const usersRouter = require('express').Router();
const User = require('../models/user.js')

const Product = require('../models/product.js')

const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

usersRouter.get('/login', (req,res) => {
    res.render('login.ejs', {err: ''})
})

usersRouter.post('/login', (req,res) => {
    User.findOne({ email: req.body.email }, (err, foundUser => {
        if(!foundUser) return res.render('/login.ejs', { err: 'invalid credentials' })
        if(!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.render('login.ejs', { err: 'invalid credentials'})
        }
        req.session.user = foundUser._id
        res.redirect('/dashboard')
    }))
})

usersRouter.get('/signup', (req,res) => {
    res.render('signup.ejs')
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



usersRouter.get('/dashboard', async (req,res) => {
    const products = await Product.find({})
    if(!req.session.user) return res.redirect('/login');
    User.findById(req.session.user, (err, user) => {
        delete user.password
        console.log(user)
        res.render('dashboard.ejs', { user, products })
    })
})


module.exports = usersRouter