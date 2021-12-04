const mongoose =require('mongoose')
const PersonSchema=new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    email:String,
    Stories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Story"
    }]
})
module.exports=mongoose.model('Person',PersonSchema)

