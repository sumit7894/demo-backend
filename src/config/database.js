const mongoose = require('mongoose');
const {MONGODB_URL} = require('./serverConfig');


const connect =()=>{
    mongoose.connect(MONGODB_URL),{
        useNewUrlParser:true,
        useUnifiedTopogy:true,
        useCreateIndexTrue:true
    }
}

module.exports = connect;