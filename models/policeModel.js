const mongoose = require("mongoose")
const  policeModel = require("../models/policeModel")

const policeScheme = new mongoose.Schema(
    {
        policeName:String,
        phone:String,
        policeStation:String,
        badgeNumber:String

    }
)

module.exports = mongoose.model
("police",policeScheme)