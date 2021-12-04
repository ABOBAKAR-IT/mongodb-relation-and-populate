const { addStory, findStory } = require("../services/StoryServices")

module.exports.add=async(req,res)=>{
    const t=req.body.title
    const id=req.body.id
    try {
        await addStory(t,id)
        res.send("data is save")
        
    } catch (error) {
        console.log(error);
    }
}
module.exports.find=async(req,res)=>{
   
    try {
  const data= await findStory()
  if(data){
    res.send(data)

  }
  else {
    res.send("not found")

  }
        
    } catch (error) {
        console.log(error);
    }
}
module.exports.update=async(req,res)=>{
    
}
module.exports.dlt=async(req,res)=>{
    
}