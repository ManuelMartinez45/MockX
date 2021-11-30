const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: String,
    img: String,
    price: {
        type: Number,
        min: 0,
    },
    qty: {
        type: Number,
        min: 0
    },
    color: String,
    brand: {
        type: String,
        required: true
    },
    brandLogo: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product