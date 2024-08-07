const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");


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


app.use(cors(allow_Cors_urls));

app.get("/cors", (req, res) => {
  res.send();
});

app.get("/", (req, res) => {
  res.json({ name: "Forhad Mia" });
});

module.exports = app;
