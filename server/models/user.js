const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    minLength: 3,
    maxLength: 10,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 20,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
