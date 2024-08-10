const { users_model } = require("../../models/db_model/db_model");
const { error_res, success_res } = require("../../service/responsed_handlling");

const user_register = async(req, res) => {
    try {
      const { name, email, phone, password, again_password } = req.body;
      
      if (password !== again_password) {
        return error_res(res, { status_code: 500, message: "password not match" });
      }
      const user_checking = await users_model.findOne({email})
      if(user_checking) return error_res(res,{status_code: 203, message: `Email already registered`})
      const new_user = { name,email,password,phone
      }
      const user_saved = await users_model.create(new_user)
     
      success_res(res, {
        status_code: 201,
        message: "user successfully created",
        payload: user_saved,
      }); 
    } catch (error) {
      return error_res(res, { status_code: 404, message: error });
    } 
  }
 
module.exports = { user_register}