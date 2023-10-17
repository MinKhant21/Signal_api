require('dotenv').config();
import express  from "express";
import cors from 'cors'
const bodyParser = require('body-parser')
const authRouter = require('./src/router/auth')
const apiRouter = require('./src/router/api')
import { getDb, mongodbConnect } from "./src/database/config";
import cli from "nodemon/lib/cli";
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

mongodbConnect(()=>{
    app.listen(4200,()=>{
        console.log(`Server Running in http://localhost:${4200}`)
    })
})



