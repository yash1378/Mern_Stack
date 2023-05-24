 //connection to database
 const mongoose = require('mongoose')
 const myFunction =async()=>{ await mongoose.connect('mongodb+srv://yashd:yashiitian@nodeexpressproject.qp0arwg.mongodb.net/gofoodmern?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(async()=>{
     console.log("connected...")

    //  const users = mongoose.model('users', userSchema);
    //  try {
    //      const data = await users.find({});
    //      console.log(data)
    //  } catch (error) {
    //      console.log(error)
    //  }    
 })
 .catch((error)=>{
     console.error("error has been occured...",error)
 })
}


 module.exports = myFunction;
 
