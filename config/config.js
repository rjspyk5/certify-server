const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDb = async () => {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.dir(error);
  }
};

module.exports = connectDb;
