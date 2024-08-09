const success_res = (
    res,
    { status_code = 200, message = "succesfull", payload = {} }
  ) => {
    res.status(status_code).json({
      message,
      payload,
    });
  };

const error_res = (res,{status_code= 500, message = "Internal server error"})=>{
    res.status(status_code).json({
        message
    })
} 

module.exports = {success_res, error_res}