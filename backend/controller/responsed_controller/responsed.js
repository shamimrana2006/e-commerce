const { error_handle } = require("../../routers/error_handle/error_handle");
const { success, error_res } = require("../../service/responsed_handlling");
const createError = require("http-errors");

const clientError = (req, res, next) => {
  next(createError(404, "page not found"));
};
const serverError = (err, req, res, next) => {
  error_res(res, { status_code: err.status, message: err.message });
};

module.exports = { clientError, serverError };
