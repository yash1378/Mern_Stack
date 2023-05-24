const express = require('express')
const router = express.Router()
const User = require('../models/User')

 
router.post('/createuser',async(req,res)=>{
    try {
        await User.create({
            name:"qwerty",
            password:"1234565678",
            email:"qwerty@gmail.com",
            location:"iitroorkee"
        })
    res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
 })

 module.exports = router;