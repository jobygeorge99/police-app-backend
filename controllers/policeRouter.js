const express = require("express")
const  policeModel = require("../models/policeModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let policeModelObj = new policeModel(data)
    let result = await policeModelObj.save()
    res.json({
        "status":"success"
    })
})

module.exports=router