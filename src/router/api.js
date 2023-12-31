import express from "express";
import ApiController from '../controller/ApiController'
import verifyToken from "../middleware/verifyToken";

const apiRouter = express.Router();

apiRouter.get('/getUser',verifyToken,ApiController.getUser)

apiRouter.get('/myaccount',verifyToken,ApiController.myAccount)

apiRouter.get('/history',verifyToken,ApiController.history)

apiRouter.get('/join-chat-room',ApiController.joinChatRoom)

apiRouter.get('/chat',verifyToken,ApiController.chatRoom)

apiRouter.post('/add-friend',verifyToken,ApiController.addFriend)

module.exports = apiRouter