const { users_model } = require("../../models/db_model/db_model");
const { seed_users_data } = require("../../models/seed_users_data");
const { success_res } = require("../../service/responsed_handlling");

const seed_controller = async (req, res) => {
  try {
    await users_model.deleteMany({});
    await users_model
      .create(seed_users_data)
      .then(() => console.log("user reset success"));
    const all_users = await users_model.find({}, { password: 0 });
    success_res(res, {
      status_code: 201,
      message: "default user create",
      payload: all_users,
    });
  } catch (error) {
    console.log("error : ", error);
  }
};

module.exports = { seed_controller };
