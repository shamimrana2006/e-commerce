const app = require("./app");
const { DB_connection } = require("./service/db_connection");

require("dotenv").config();

const port = process.env.port;

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
});