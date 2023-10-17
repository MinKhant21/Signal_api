import jwt from 'jsonwebtoken'

require('dotenv').config()

module.exports = (id,phoneNumber,countryCode) => {
    const token = jwt.sign({id,phoneNumber,countryCode},process.env.TOKEN_KEY)
    return token
}