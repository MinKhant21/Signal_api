import User from "../models/User"
import GenerateToken from '../utli/generateToken'
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
            message : "I have an account",
            data : result,
            token : token
        })
    })
    
}