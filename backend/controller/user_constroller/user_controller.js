const {
  users_model,
  Users_model_otp,
} = require("../../models/db_model/db_model");
const { email_sender } = require("../../service/email_sender");
const { jsonntoken } = require("../../service/jsonwebtoken");
const { error_res, success_res } = require("../../service/responsed_handlling");
const { json_screat } = require("../../service/screat");
const jwt = require("jsonwebtoken");

//registar
const user_register = async (req, res) => {
  try {
    const { name, email, phone, password, again_password } = req.body;

    if (password !== again_password) {
      return error_res(res, {
        status_code: 500,
        message: "password not match",
      });
    }
    const user_checking = await users_model.findOne({ email });
    if (user_checking)
      return error_res(res, {
        status_code: 403,
        message: `Email already registered`,
      });
    const otp = Math.ceil(Math.random() * 1000000);
    const new_user = { name, email, password, phone };

    const user_token = await jsonntoken(new_user, json_screat, "1m");
    await Users_model_otp.create({
      otp,
      email,
      token: user_token,
    });
    const info = await email_sender({
      email,
      subject_txt: "email varifications",
      userName: name,
      data: { otp, token: user_token },
    });

    // const user_saved = await users_model.create(new_user)

    success_res(res, {
      status_code: 201,
      message: "user successfully created",
      payload: user_token,
    });
  } catch (error) {
    console.log(error);

    return error_res(res, { status_code: 404, message: error });
  }
};

//verification
const verification_user_by_otp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    const user_checking = await users_model.findOne({ email });
    if (user_checking)
      return error_res(res, {
        status_code: 403,
        message: `Email already registered`,
      });
    const find_user_with_OTP = await Users_model_otp.findOne({ otp, email });
    if (!find_user_with_OTP)
      error_res(res, { status_code: 400, message: "otp not valid" });

    const reslut_verification = await jwt.verify(
      find_user_with_OTP.token,
      json_screat
    );

    await users_model.create(reslut_verification);
    await Users_model_otp.findOneAndDelete({ otp });
    success_res(res, { status_code: 200, payload: reslut_verification });
  } catch (error) {
    console.log(error, "shamim");

    return error_res(res, { status_code: 401, message: error });
  }
};
const verification_user = async (req, res) => {
  try {
    const { token } = req.body;
    // console.log("shamim" , shamim);

    const reslut_verification = await jwt.verify(token, json_screat);
    const user_checking = await users_model.findOne({ email: reslut_verification.email });
    if (user_checking)
      return error_res(res, {
        status_code: 403,
        message: `Email already registered`,
      });
    const info = await users_model.create(reslut_verification);

    res.redirect("https://www.google.com");
  } catch (error) {
    return error_res(res, { status_code: 401, message: error });
  }
};

module.exports = { user_register, verification_user, verification_user_by_otp };
