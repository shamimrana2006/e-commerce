
const {
  user_register,
  verification_user,
  verification_user_by_otp,
} = require("../../controller/user_constroller/user_controller");
const { success_res, error_res } = require("../../service/responsed_handlling");

const { validationArray, runValidation } = require("../../service/express_validation/validator");
const { body } = require("express-validator");
const user_router = require("express").Router();


//registar   //api/
user_router.post("/user/registar",validationArray,runValidation,  user_register);
user_router.post("/user/registar/verify",  verification_user);
user_router.post("/user/registar/verify/otp",  verification_user_by_otp);


module.exports = { user_router };
 