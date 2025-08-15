const express = require("express")
const app = express()
require("dotenv").config();

app.use(express.json())

const { run } = require("./utils/database");
run()



app.get("/", (req, res)=>{
    res.send("The Personal Expense Tracking server is coming soon...!!!")
})

app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on the port of ${process.env.PORT}`)
})