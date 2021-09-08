const express=require('express')
const router= express.Router();
const users= require('../model/user')
router.use(express.json())
router.post('/users',(req,res)=>{
    const {newUser} = req.body
    users.create({newUser},(err)=>{
        err ? res.send(err):res.send('user added')
    })
})
router.get('/users',async(req, res)=>{
    try {
        const data = await users.find({}).exec()
        res.status(200).json({data})
    } catch (error) {
        res.status(504).json({"error": error})
        
    }
})
router.put('/users/:id',(req, res)=>{
    users.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        err? res.status(400).send(err):res.status(200).send('user updated successfully')
    })
})
router.delete('/users/:id',(req, res)=>{
    users.findByIdAndRemove(req.params.id,(err)=>{
        err? res.status(504).send(err):res.status(200).send('user deleted')
    })
})
module.exports=router;