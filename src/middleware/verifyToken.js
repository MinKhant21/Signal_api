import jwt from 'jsonwebtoken'

module.exports = (req,res,next) => {
    const token = req.headers['x-auth-token']
    let decodeToken ;
    if(!token){
        res.json({
            status : "403",
            message : "Unauthorization"
        })
    }
    try {
        decodeToken = jwt.verify(token,process.env.TOKEN_KEY)
        req.userId = decodeToken.id
        next()
    } catch (error) {
        error.statusCode = 500
        throw error
    }
}