import express from "express";
import ApiController from '../controller/ApiController'
import verifyToken from "../util/verifyToken";

const apiRouter = express.Router();

apiRouter.get('/getUser',verifyToken,ApiController.getUser)

apiRouter.get('/myaccount',verifyToken,ApiController.myAccount)

apiRouter.get('/join-chat-room',ApiController.joinChatRoom)

module.exports = apiRouter