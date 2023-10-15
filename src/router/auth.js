import express from "express";
import { getDb } from "../database/config";
import AuthController from '../controller/AuthController'
const authRouter = express.Router()

authRouter.post('/api/login',AuthController.login)
authRouter.post('/api/register',(req,res,next)=>{
    res.json({
        data : req.body
    })
})
authRouter.post('/verif',(req,res) => {
    res.send('<h1>h1</h1>')
})

module.exports = authRouter