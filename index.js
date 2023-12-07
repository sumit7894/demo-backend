const express = require('express');
const {PORT} = require('./src/config/serverConfig');
const dotenv = require('dotenv');
const Product = require('./src/model/Product');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.get('/',async(req,res)=>{
    try {
        console.log("Received a GET request");
        return res.status(200).json({
            success:true,
            message:"OK api is working fine",
            data:"Finall done",
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failed to react the backend api",
            data:{},
            err:error
        })
    }
})

const route = express.Router();

app.route('/api/v1/company').post(async (req,res)=>{
    try {
        const response = await Product.create({
            ProductName : req.body.product,
            email : req.body.email,
            password : req.body.password
        })
        
        return res.status(201).json({
            success:true,
            message:"Successfully added the product",
            data:response,
            err:{}
        })
    } catch (error) {
        console.log("hellow world");
        console.log("here is the error-",error);
        return res.status(500).json({
            success:false,
            message:"Failed to add the product",
            data:{},
            err:error
        })
    }
})

app.listen(PORT,()=>{
console.log(`Yup server has started at Port ${PORT}`);
try {
    mongoose.connect(process.env.MONGODB_URL),{
        useNewUrlParser:true,
        useUnifiedTopogy:true,
        useCreateIndexTrue:true
    }
    console.log("Server Connected Enjoy!!")
} catch (error) {
    console.log("Connection failed",error);
}
});
