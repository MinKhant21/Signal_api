const { getDb } = require("../database/config");

class User {
    phoneNumber;
    countryCode;
    constructor(phoneNumber,countryCode) {
        this.phoneNumber = phoneNumber
        this.countryCode = countryCode
    }
    save(){
        const db = getDb()
        return db.collection('users').insertOne(this)
    }
    findOne(){
        const db = getDb()
        return db.collection('users').findOne({phoneNumber:this.phoneNumber},(err,result)=>{
            if (err) throw err
            if(result){
                console.log(result)
            }
        })
        
    }
}

module.exports = User