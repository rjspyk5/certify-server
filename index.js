const express = require("express");
const connectDb = require("./config/config");
const app = express();
const port = 3000;

connectDb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
