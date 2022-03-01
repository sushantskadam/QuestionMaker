const mongoose = require("mongoose");
//db connection
const db = "mongodb://localhost:27017/QMaker";
const connectDB = async () => {
    try {
      await mongoose.connect(db, { useNewUrlParser: true });
      console.log("mongo db connected");
    } catch (err) {
      console.log(err.message);
    }
  };

  module.exports= connectDB;