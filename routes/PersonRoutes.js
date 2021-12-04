const express=require('express')
const { add, find, update, dlt } = require('../controlar/PersonControlar')
const PersonRoutes=express.Router()
PersonRoutes.post('/add',add)
PersonRoutes.post('/find',find)
PersonRoutes.post('/update',update)
PersonRoutes.post('/delete',dlt)
PersonRoutes.get('/',(req,res)=>{
    res.send("welcome to nodejs server")
    })
module.exports=PersonRoutes