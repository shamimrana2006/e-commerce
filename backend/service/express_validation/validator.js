const { body, validationResult } = require("express-validator");
const { error_res } = require("../responsed_handlling");
const validationArray = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3, max: 31 })
    .withMessage("name min: 3 and max:31")
    .trim(),
  body("password")
    .notEmpty()
    .withMessage("password required")
    .isLength({ min: 6 })
    .withMessage("password min: 6 "),
  body("phone")
    
    .notEmpty()
    .withMessage("phone required"),
  body("email")
    .isEmail()
    .withMessage("enter valid email"),

];
const runValidation = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return error_res(res, {
        status_code: 404,
        message: errors.errors[0].msg,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { runValidation, validationArray };
