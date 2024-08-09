const express = require("express");
const app = express();
const { cors_setup } = require("./service/cors_setup");
const { error_handle } = require("./routers/error_handle/error_handle");
const { user_router } = require("./routers/users/user_router");
const { seed_router } = require("./routers/users/seed_users_router");

app.use(cors_setup);
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get("/", (req, res) => {
  res.json({ name: "welcome our server" });
});
app.use("/reset/",seed_router)
app.use("/api/",user_router)
app.use(error_handle);

module.exports = app;
