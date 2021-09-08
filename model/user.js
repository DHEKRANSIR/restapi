const mongoose = require('mongoose')
const {Schema,model}= mongoose

const userSchema= new Schema({
    name:{type:"string"},
    age:{type:"number"},
    favoriteFood:[String]
})
const users= model('users', userSchema);
module.exports=users;