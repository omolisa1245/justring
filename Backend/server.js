import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import formRouter from "./routes/infoRoute.js";


// app config
const app = express();
const port = 5000

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

// DB connection
connectDB();


//api end point
app.use("/api/user/",userRouter)
app.use("/api/form/", formRouter)

app.get("/", (req,res)=> {
    res.send("api initiating")
})

