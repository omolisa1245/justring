import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import formRouter from "./routes/infoRoute.js";

// App Config
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use("/api/user", userRouter);
app.use("/api/form", formRouter);

app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

// ✅ VERY IMPORTANT FOR VERCEL
export default app;