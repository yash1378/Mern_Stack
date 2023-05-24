 //connection to database
 const mongoose = require('mongoose')
 const myFunction =()=>{ mongoose.connect('mongodb+srv://yashd:yashiitian@nodeexpressproject.qp0arwg.mongodb.net/gofoodmern?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(async()=>{
     console.log("connected...")
     const userSchema = new mongoose.Schema({
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
     const users = mongoose.model('users', userSchema);
     try {
         const data = await users.find({});
         console.log(data)
     } catch (error) {
         console.log(error)
     }
 
 
 
     
 })
 .catch((error)=>{
     console.error("error has been occured...",error)
 })
}


 module.exports = myFunction;
 
