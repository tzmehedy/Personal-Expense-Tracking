const express = require("express")
require("dotenv").config()

const app = express()

app.use(express.json())


app.get("/", (req, res)=>{
    res.send("The Personal Expense Tracking server is coming soon...!!!")
})

app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on the port of ${process.env.PORT}`)
})