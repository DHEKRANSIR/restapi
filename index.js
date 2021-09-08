const express=require('express')
const app = express()
const port= process.env.PORT ||5000
const mongoose = require('mongoose')
const users= require('./model/user')
const connect = require('./connection/connect')
app.use(express.json())

app.post('/api/users',(req,res)=>{
    const {newUser} = req.body
    users.create({newUser},(err)=>{
        err ? res.send(err):res.send('user added')
    })
})
app.get('/api/users',async(req, res)=>{
    try {
        const data = await users.find({}).exec()
        res.status(200).json({data})
    } catch (error) {
        res.status(504).json({"error": error})
        
    }
})
app.put('/api/users/:id',(req, res)=>{
    users.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        err? res.status(400).send(err):res.status(200).send('user updated successfully')
    })
})
app.delete('/api/users/:id',(req, res)=>{
    users.findByIdAndRemove(req.params.id,(err)=>{
        err? res.status(504).send(err):res.status(200).send('user deleted')
    })
})



connect()
app.listen(port,err=>err?console.log(err):console.log('server is running on port'))