const { findOneAndUpdate } = require("../model/personSchema");
const person = require("../model/personSchema")
const Story = require("../model/StorySchema")

module.exports.addStory=async(t,id)=>{
const story=new Story({
    title:t, 
    author:id
})
try {
  await  story.save().then(async(story1)=>{
    person.findOne({_id:story.author}).then(async(Author) => {
      console.log("data value "+ Author.Stories);
     const  ln=Author.Stories.length
     Author.Stories[ln]=story1
      const storyadd=Author.Stories

  
    console.log("data value "+ Author.Stories);


    
      person.findOneAndUpdate({_id:Author._id},{Stories:storyadd}).then((d)=>{
        console.log(d);
      }).catch(err=>console.log(err))
      
  }).catch(err=>console.log(err))
    
  }).catch((err) => {
    console.log(err);
  });

} catch (error) {
    console.log(error);
}
}
module.exports.findStory=async()=>{

       return await   Story.find().populate('author')
       
       
}
module.exports.updateStory=async(req,res)=>{
    
}
module.exports.deleteStory=async(req,res)=>{
    
}