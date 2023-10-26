import User from "../models/User";
import Message from "../models/message";
import Room from "../models/room";
import io from '../../socket'
const mongoose = require('mongoose')
const Socket = require('../../socket')
exports.getUser = async(req,res) => {
    const userId = req.userId
    
    Room.find({user_one_id : userId}).populate('user_one_id user_two_id')
    .then(result=>{
        res.json({
        status : "200",
        message : "all User Fetched",
        data : result
        })
    })

    // Get All Users

    //  User.find({_id:{$ne:userId}}).then(users=>{
    //     res.json({
    //     status : "200",
    //     message : "all User Fetched",
    //     data : users
    //     })
    // })
    
}

exports.myAccount = async(req,res) => {
    let _id = req.query.userId
    User.findOne({_id:_id})
    .then(user=>{
        res.json({
            status : "200",
            message : "My Account Info",
            data : user
        })
    })
}

exports.history = async(req,res) => {
    const fromUser = req.userId 
    let toUser =  req.query.id 
    await Message.find({to_userId:toUser,form_userId:fromUser})
    .then(result=>{
        console.log(result)
        res.json({
            status : "200",
            messages : result
        })
    })
}

exports.addFriend = async (req,res) => {
    const oneUser = req.userId 
    const phoneNumber = req.body.phoneNumber

    let user = await User.findOne({phoneNumber : phoneNumber }).exec()
    if(!user){
        return res.json({
            message : "Phone Number does not registed"
        })
    }

    let room = await Room.findOne({user_one_id : oneUser , user_two_id : user._id}).populate('user_one_id user_two_id').exec()
    if(room){
        return res.json({
            status : "200",
            message : "You Already Added ",
            data : room
        })
    }

    await Room.create({
        user_one_id : oneUser , 
        user_two_id : user._id
    })
    .then(room=>{
        return res.json({
            status : "200",
            message : "Successfully Added",
            data : room
        })
    })
}

exports.chatRoom = async(req,res) => {
    let io = require('../../socket').getIo()
    io.on("connection",(socket)=>{
        console.log("Client Connected")
        // Chat 
        socket.on('chat',(data)=>{
            if(data){
                Message.create({
                    form_userId:data.fromUser._id,
                    to_userId:data.toUser._id,
                    roomId : data.roomId,
                    message : data.message
                }).then(createMessage=>{
                    io.sockets.emit('chat',data.message)
               
                })
            }
           
        })
    })

         res.json({
                        status : "200"
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