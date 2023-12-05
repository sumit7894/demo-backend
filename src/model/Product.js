const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductName:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type:String
    },
    company:{
        type:String
    }
},{timestamps:true})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;