import User from "../models/User"
import GenerateToken from '../middleware/generateToken'
exports.login = async (req,res) => {
    let phoneNumber = req.body.phoneNumber
    let countryCode = req.body.countryCode
    let name = req.body.name
    let user = await User.findOne({phoneNumber : phoneNumber}).exec()
    if(user){
        const token = GenerateToken(user._id,user.phoneNumber,user.countryCode)
        res.json({
            status : "200",
            message : "You have an account",
            data :user ,
            otp : '123456',
            token : token
        })
    }else{
          await User.create({
                name : name,
                countryCode:countryCode,
                phoneNumber:phoneNumber,
            }).then(user=>{
                console.log(user)
                const token = GenerateToken(user._id,user.phoneNumber,user.countryCode,user.chatId)
                res.json({
                    status : "200",
                    message : "Created an account",
                    data : user,
                    otp : '123456',
                    token : token
                })
            })
    }
    
}