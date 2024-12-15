const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
});

const User = new mongoose.model("user", userSchema);

const createUser = async (name, email) => {
  const user = new User({ name, email, role: "1" });
  return await user.save();
};

const findUser = async (email) => await User.findOne({ email });

module.exports = { createUser, findUser };
