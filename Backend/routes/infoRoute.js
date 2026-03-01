import {infoForm } from "../controllers/infoController.js"
import express from "express"
import userAuth from "../middleware/auth.js"


const formRouter = express.Router()

formRouter.post("/info",infoForm)


export default formRouter;
