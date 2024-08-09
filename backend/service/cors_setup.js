const cors_setup = require("express").Router()
const cors = require("cors")
require("dotenv").config()

// cors setup 
const cors_urls = JSON.parse(process.env.cors_url);
const allow_Cors_urls = (req, callback) => {
    var cors_option;
  console.log(cors_urls.indexOf(req.header("origin")));
   
  if (cors_urls.indexOf(req.header("origin")) !== -1) {
    cors_option = { origin: true };
  } else { 
    cors_option = { origin: false };
  }
  callback(null, cors_option); 
};
cors_setup.use(cors(allow_Cors_urls));

module.exports = {cors_setup}