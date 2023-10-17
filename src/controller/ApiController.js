import User from "../models/User";

exports.getUser = async(req,res) => {
    const userId = req.userId
    let users = await User.all(userId).then(users=>{
        return users
    })
    
    res.json({
        status : "200",
        message : "all User Fetched",
        data : users
    })
}