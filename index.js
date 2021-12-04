const express = require("express");
const mongoose = require("mongoose");

const PersonRoutes = require("./routes/PersonRoutes");
const StoryRoutes = require("./routes/StoryRoutes");
const app = express();
app.use(express.json());
app.use("/per", PersonRoutes);
app.use("/story", StoryRoutes);
port = 51500;
app.listen(port, () => {
    console.log(`server work on port no ${port}`);
});
const mongodb = "mongodb+srv://abobakar786:rana786@cluster0.ojybe.mongodb.net/relation1?retryWrites=true&w=majority";
mongoose.connect(mongodb).then(() => {
    console.log("database connected successfully");
}).catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("welcome to nodejs server");
});



