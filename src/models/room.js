const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
    user_one_id : [
        {type : Schema.Types.ObjectId , ref : "User"}
    ],
    user_two_id : [
        {type : Schema.Types.ObjectId , ref : "User"}
    ]
})

module.exports = mongoose.model("Room",roomSchema)