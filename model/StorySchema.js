const mongoose = require('mongoose')
const StorySchema = mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person"
    }
})
const Story = mongoose.model("Story", StorySchema)
module.exports = Story