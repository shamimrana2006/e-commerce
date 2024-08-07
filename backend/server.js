const app = require("./app")

require("dotenv").config()

const port = process.env.port
const url = process.env.cors_url

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
    
})