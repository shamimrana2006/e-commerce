const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.json({name: "shamim"})
})
module.exports = app