const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name :{
        type :String,
    },
    countryCode :{
        type :String,
    },
    phoneNumber :{
        type :String,
    },
   
})

module.exports = mongoose.model('User',userSchema)

// const { getDb } = require("../database/config");
// const mongodb = require('mongodb')
// const uuid = require('uuid')
// class User {
//     phoneNumber;
//     countryCode;
//     chatId = uuid.v4()

//     constructor(phoneNumber,countryCode) {
//         this.phoneNumber = phoneNumber
//         this.countryCode = countryCode
//     }
//     save(){
//         const db = getDb()
//         return db.collection('users').insertOne(this)
//     }
//     findOne(){
//         const db = getDb()
//         return db.collection('users').findOne({phoneNumber:this.phoneNumber},(err,result)=>{
//             if (err) throw err
//             if(result){
//                 console.log(result)
//             }
//         })
//     }
//     static all(_id){
//         const db = getDb()
//           return db.collection('users').find({_id:{$ne:new mongodb.ObjectId(_id)}}).toArray()
//          .then(users=>{
//             return users
//           })
//           .catch(error=>{
//             console.log(error)
//           })
      
//     }
// }

// module.exports = User