const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI);

    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.dir(error);
  }
};

module.exports = { connectDb };
