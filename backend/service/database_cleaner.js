const { Users_model_otp } = require("../models/db_model/db_model");

const cleare_database = async (req, res) => {
    try {
      const user =await Users_model_otp.deleteMany({
        exptime: { $lt: Date.now() },
      })
        .then((e) =>
          console.log("document deleted")
          
        )
        .catch(err=>console.log("document not deleted")
        );
    } catch (error) {}
  };

module.exports = {cleare_database}