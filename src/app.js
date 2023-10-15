require('dotenv').config();
import express  from "express";
import cors from 'cors'
import router from './router/auth'
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
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

module.exports = app