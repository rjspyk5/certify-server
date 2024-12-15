const express = require("express");
const cors = require("cors");

const UserControllar = require("./controllar/UserControllar");
const { connectDb } = require("./config/config");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    optionSuccessStatus: 200,
  })
);

// middleware
app.use(express.json());

connectDb();

// user Routes
app.post("/register", UserControllar.register);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
