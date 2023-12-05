const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;