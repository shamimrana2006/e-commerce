const { error_res, success_res } = require("../../service/responsed_handlling");

const user_register = (req, res) => {
    try {
      const { name, email, phone, password, again_password } = req.body;
      if (password !== again_password) {
        throw error_res(res, { status_code: 500, message: "password not match" });
      }
      success_res(res, {
        status_code: 201,
        message: "user create",
        payload: { name, email, phone },
      }); 
    } catch (error) {
      return error_res(res, { status_code: 404, message: error.message });
    }
  }

module.exports = { user_register}