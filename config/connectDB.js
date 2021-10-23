const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect("mongodb://localhost/mongoosecheck", () => {
    try {
      console.log("database connected... ")
    } catch (error) {
      console.log(error);
    }
  })
}

module.exports = connectDB;