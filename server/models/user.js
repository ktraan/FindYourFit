const mongoose = require("mongoose");
const emailRegEx = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [1, "First name must be 1 character or more."],
    maxlength: [30, "First name cannot be greater than 30 characters."],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [1, "Last name must be 1 character or more."],
    maxlength: [30, "Last name cannot be greater than 30 characters."],
  },
  email: {
    type: String,
    required: true,
    match: [emailRegEx, "Email must be in the format: fyf@gmail.com"],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must contain 8 or more characters."],
    trim: true,
  },
  gender: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    min: "1900-01-01",
    max: Date.now,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subscribedToEmail: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
