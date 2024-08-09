const { seed_controller } = require("../../controller/user_constroller/seed_controller");

const seed_router = require("express").Router();

// /reset
seed_router.get("/users/seed/",seed_controller)


module.exports = {seed_router}