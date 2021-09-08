const mongoose = require('mongoose')
require('dotenv').config()
const connect=()=>{
    mongoose.connect(process.env.api_url)
    .then(()=>console.log('Connected to database'))
    .catch((err)=> console.log(err)
    )
}
module.exports=connect