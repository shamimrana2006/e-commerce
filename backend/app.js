const express = require("express");
const app = express();
const { cors_setup } = require("./service/cors_setup");
const { error_handle } = require("./routers/error_handle/error_handle");
const { user_router } = require("./routers/users/user_router");
const { seed_router } = require("./routers/users/seed_users_router");
const { users_model } = require("./models/db_model/db_model");
const { success_res } = require("./service/responsed_handlling");
const { DB_connection } = require("./service/db_connection");

app.use(cors_setup);
// app.use(async (rq,res,next) => {
//   
//   next()
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  res.json({ name: "welcome our server" });
});

app.use("/reset/", seed_router);
app.use("/api/", user_router);
app.use(error_handle);

module.exports = app;                            
