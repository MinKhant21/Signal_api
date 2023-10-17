import express from "express";
import ApiController from '../controller/ApiController'
import verifyToken from "../util/verifyToken";

const apiRouter = express.Router();

apiRouter.get('/getUser',verifyToken,ApiController.getUser)

module.exports = apiRouter