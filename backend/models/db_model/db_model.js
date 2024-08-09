const mongoose = require("mongoose");

const Schemas = new mongoose.Schema({
  name: {
    required: true,
    trim: true,
    type: String,
    minlength: 3,
    maxlength: 31,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: String,
    default: "false",
  },
  isBan: {
    type: Number,
    default: 18,
  },
});

const users_model = mongoose.model("Users_model", Schemas);

module.exports = {users_model}
