const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    form_userId :{
        type : String,
    },
    to_userId :{
        type : String,
    },
    message:{
        type : String,
    }
})

module.exports = mongoose.model('Message',messageSchema)