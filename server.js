require('dotenv').config();
import express  from "express";
import cors from 'cors'
import { getDb, mongodbConnect } from "./src/database/config";
import Message from "./src/models/message";
const bodyParser = require('body-parser')
const authRouter = require('./src/router/auth')
const apiRouter = require('./src/router/api')
const mongoose = require('mongoose')
const app = express();

// app.use(cors({
//     origin:
//         process.env.NODE_ENV === 'production'
//             ? process.env.PROD_FRONT_WEB_URL  : process.env.PUBLIC_FRONT_WEB_URL,
//         credentials: true, 
//         exposedHeaders: [
//             "Access-Control-Allow-Origin",
//             "Access-Control-Allow-Credentials", 
//         ],
// }))
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(authRouter) 
app.use("/api",apiRouter)

mongoose.connect(process.env.DATABASE_HOST)
    .then(result=>{
        let server = app.listen(4200,()=>{
            console.log(`Server Running in http://localhost:${4200}`)
        })
        const io = require('./socket').init(server)
        io.on("connection",(socket)=>{
            console.log("Client Connected")

            // Chat 

            socket.on('chat',(data)=>{
                if(data){
                    Message.create({
                        form_userId:data.fromUser._id,
                        to_userId:data.toUser._id,
                        message : data.message
                    }).then(createMessage=>{
                        io.sockets.emit('chat',data.message)
                    })
                }
               
            })
        })
    })
    .catch(e=>{
        console.log(e)
})


// mongoose.connect(()=>{
//     let server = app.listen(4200,()=>{
//         console.log(`Server Running in http://localhost:${4200}`)
//     })
//     const io = require('./socket').init(server)
//     io.on("connection",(socket)=>{
//         console.log("Client Connected")
//     })
// })



