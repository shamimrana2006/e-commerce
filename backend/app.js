const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { cors_setup } = require("./service/cors_setup");
const { error_handle } = require("./routers/error_handle/error_handle");

app.use(cors_setup);

app.get("/", (req, res) => {
  res.json({ name: "Forhad Mia" });
});

app.use(error_handle);

module.exports = app;
