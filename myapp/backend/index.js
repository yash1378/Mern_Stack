 const express=  require('express')
 const app = express()
 const port  =1000
 const myFunction = require('./db')

// const users = mongoose.model('users', userSchema);
myFunction();
app.use(express.json())
app.use('/api/',require("./Routes/CreateUser"),)
 app.get('/',(req,res)=>{
    res.send('hello world');
 })




 app.listen(port,()=>{
    console.log(`port is listening on port ${port}`)
 })