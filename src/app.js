require('dotenv').config();
import express  from "express";
import cors from 'cors'
import router from './router/index'
const app = express();

app.use(cors({
    origin:
        process.env.NODE_ENV === 'production'
            ? process.env.PROD_FRONT_WEB_URL  : process.env.PUBLIC_FRONT_WEB_URL,
        credentials: true, 
        exposedHeaders: [
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Credentials", 
        ],
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(process.env.API_PREFIX + "login" , router)

module.exports = app