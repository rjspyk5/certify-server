const express = require("express");
const cors = require("cors");
const connectDb = require("./config/config");
const app = express();
const port = 3000;

app.use(cors());

// middleware
app.use(express.json());

connectDb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
