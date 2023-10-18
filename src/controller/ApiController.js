import User from "../models/User";
const mongoose = require('mongoose')
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