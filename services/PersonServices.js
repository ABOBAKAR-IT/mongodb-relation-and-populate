const mongoose = require("mongoose");
const Person = require("../model/personSchema");
module.exports.addPerson = async (name, em) => {
  console.log("Name: " + name + " " + "Email: " + em);
  const userPerson = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    email: em,
  });
  try {
    await userPerson.save();
    console.log("data is saved");
  } catch (error) {
    console.log(error);
  }
};
module.exports.findPerson = async () => {
  return await Person.find().populate("Stories");
};
module.exports.updatePerson = async (req, res) => {};
module.exports.deletePerson = async (req, res) => {};
