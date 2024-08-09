const app = require("./app");
const { DB_connection } = require("./service/db_connection");

require("dotenv").config();

const port = process.env.port;
const url = process.env.cors_url;

app.listen(port, async() => {
   await  DB_connection();
  console.log(`server is running at http://localhost:${port}`);

});
