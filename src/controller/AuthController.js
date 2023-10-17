import User from "../models/User"
import GenerateToken from '../util/generateToken'
exports.login = (req,res) => {
    let phoneNumber = req.body.phoneNumber
    let countryCode = req.body.countryCode
    const user = new User(phoneNumber,countryCode)
    user.findOne().then(result=>{
        if(!result){
            user.save()
            .then(data=>{
                console.log(data)
            })
        }
        const token = GenerateToken(result._id,result.phoneNumber,result.countryCode)
        res.json({
            status : "200",
            message : "You have an account",
            data : result,
            otp : '123456',
            token : token
        })
    })
    
}