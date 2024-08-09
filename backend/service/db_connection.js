require("dotenv").config();
const { default: mongoose } = require("mongoose");
mongo_urls = process.env.modngo_db_urls;

const DB_connection = async () => {
  try {
    await mongoose.connect(mongo_urls);
    console.log("database is conneced");
  } catch (error) {
    console.log("database in faild for : ", error);
    
  } 
};

module.exports = { DB_connection };
