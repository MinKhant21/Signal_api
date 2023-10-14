require('dotenv').config()
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
let _db;
const mongodbConnect = (callback) => {
    MongoClient.connect(process.env.DATABASE_HOST)
    .then((client)=>{
        _db = client.db('signal')
        console.log('Mongodb DataBase Connected')
    })
    .then(err=>console.error(err))
}

const getDb = () => {
    if(!_id){
        throw ('Connection Db name not found')
    }
    return _db
}

module.exports = {mongodbConnect , getDb}