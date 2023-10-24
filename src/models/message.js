const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    room_id :[{
        type : Schema.Types.ObjectId, ref : "Room"
    }],
    form_userId :[{
        type : Schema.Types.ObjectId, ref : "User"
    }],
    to_userId :[{
        type : Schema.Types.ObjectId, ref : "User"
    }],
    message:{
        type : String,
    }
})

module.exports = mongoose.model('Message',messageSchema)