const mongoose = require('mongoose')

const {Schema} = mongoose;


const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
  });

module.exports = mongoose.model('users',userSchema)
//when it will get imported then model will get imported and then we can  apply create , update , delete on it...