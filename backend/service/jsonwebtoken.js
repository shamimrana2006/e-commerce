var jwt = require("jsonwebtoken");
const jsonntoken = async (data, screat, expired) => {
  const token = await jwt.sign(data, screat, { expiresIn: expired });
  return token;
};

module.exports = { jsonntoken };
