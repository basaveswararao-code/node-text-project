const express = require("express")

const router = express.Router()

const User = require('../models/user')

// Get all user data  (Get)
router.get('/',async (req,res)=>{
    try{
        const usersData = await User.find()
        res.status(200).json({ data: usersData})
    } catch (err){
        res.status(500).json({message:err.message})
    } 
})

// Get single user data (Get)
router.get('/:id', async (req,res)=>{
    console.log(req.params.id)
    try{
        const user = await User.findById(req.params.id)
        if(user){
            res.json({data:user})
        }else{
            res.status(404).json({ message:'User not found' })
        }
    } catch{
        res.status(500).json({message:'Error oiccured while quering'})
    }
})

// created user data(Post)
router.post('/new', async (req,res) => {
    const newUser =  new user({ userName : req.body.userName})
    await newUser.save()
    //user created in db 
    res.status(200).json({ message:"A new user is created"})
})

//updated user data (Put)  
//put : This was to updated all users data 
//patch : This was updated for the specific data like we have to mentioned of that now
router.patch('/updated/:id', async (req,res) => {
    //print the paramaters of the updated id like that id:7
    console.log(req.params)
    console.log(req.body)
    const user = await User.findById(req.params.id)
    user.userName = req.body.userName
    await user.save()
    //user is updated in db
    res.status(200).json({message:'user is updated now'})
})

//Deleted user details (Delete)
router.delete('/delete/:id',async (req,res)=>{
    //user is deleted now
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message:'user is deleted now'})
})
module.exports=router