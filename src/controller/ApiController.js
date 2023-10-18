import User from "../models/User";
const mongoose = require('mongoose')
const Socket = require('../../socket')
exports.getUser = async(req,res) => {
    const userId = req.userId
     User.find({_id:{$ne:userId}}).then(users=>{
        res.json({
        status : "200",
        message : "all User Fetched",
        data : users
        })
    })
    
}

exports.joinChatRoom = async(req,res) =>{
    // let io = Socket.getIo();
    // io.on("connection",(socket)=>{
    //     socket.on('join-chat-room',data=>{
    //         console.log(data)
    //     })
    // })
}