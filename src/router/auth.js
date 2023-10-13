import express from "express";

const authRouter = express.Router()

authRouter.post('/api/login',(req,res,next) => {
    console.log(req.body)
    res.json({
        status:200,
    })
})

authRouter.get('/a',(req,res) => {
    res.send('<h1>h1</h1>')
})

module.exports = authRouter