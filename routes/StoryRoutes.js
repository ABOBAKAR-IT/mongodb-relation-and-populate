const express=require('express')
const { add, find, update, dlt } = require('../controlar/StoryControlar')
const StoryRoutes=express.Router()
StoryRoutes.post('/add',add)
StoryRoutes.post('/find',find)
StoryRoutes.post('/update',update)
StoryRoutes.post('/delete',dlt)
module.exports=StoryRoutes
