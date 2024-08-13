const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

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
    set: (password) => bcrypt.hashSync(password, 8)
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


const OtpSchema = mongoose.Schema ({
  otp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  exptime: {
    type: Date,
    default: () => new Date(Date.now() + 60000)
  }
})

const users_model = mongoose.model("Users_model", Schemas);
const Users_model_otp = mongoose.model("Users_model_otp", OtpSchema);

module.exports = {users_model, Users_model_otp}
