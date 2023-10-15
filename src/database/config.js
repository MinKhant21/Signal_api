require('dotenv').config()
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
let db;
const mongodbConnect = (callback) => {
    MongoClient.connect(process.env.DATABASE_HOST,{ useNewUrlParser: true,useUnifiedTopology: true  })
    .then((client)=>{
        db = client.db()
        console.log('Mongodb DataBase Connected')
        callback()
    })
    .then(err=>console.error(err))
}

const getDb = () => {
    if(db){
        return db
    }else{
     throw ('Connection Db name not found')
    }

}

module.exports = {mongodbConnect , getDb}