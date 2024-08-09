const { clientError, serverError } = require("../../controller/responsed_controller/responsed");

require("dotenv").config();
const error_handle  = require("express").Router();


error_handle.use(clientError)
error_handle.use(serverError)


module.exports = { error_handle }
