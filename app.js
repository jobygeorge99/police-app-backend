const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const policeRouter = require("./controllers/policeRouter")

//alias
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routing
app.use("/api/police",policeRouter)

app.listen(3001,()=>{
    console.log("server running")
})