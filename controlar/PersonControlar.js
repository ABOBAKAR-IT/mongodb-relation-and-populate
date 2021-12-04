const { addPerson, findPerson } = require("../services/PersonServices")

module.exports.add=async(req,res)=>{

    const name= req.body.name
    const em=req.body.email
 
    try {
    await addPerson(name,em)
    res.send("data is save")
} catch (error) {
    console.log(error);
    res.send("not save")
}
}
module.exports.find=async(req,res)=>{
const id=req.body.id
    findPerson().then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.update=async(req,res)=>{
    
}
module.exports.dlt=async(req,res)=>{
    
}