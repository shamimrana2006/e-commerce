
const {
  user_register,
} = require("../../controller/user_constroller/user_controller");
const { success_res, error_res } = require("../../service/responsed_handlling");

const { validationArray, runValidation } = require("../../service/express_validation/validator");
const { body } = require("express-validator");
const user_router = require("express").Router();


//registar   //api/
user_router.post("/user/registar",validationArray,runValidation,  user_register);

module.exports = { user_router };
 