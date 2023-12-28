const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  startLocation: String,
  endLocation: String,
  startingDate: String,
  endingDate: String,
});

const user = mongoose.model("User", userSchema);

module.exports = user;
