import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRouter from "./routes/aiRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

const app = express();
await connectCloudinary()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use(requireAuth())

app.use('/api/ai',aiRouter)
app.use('/api/user',userRouter)

app.listen(PORT,()=>{
    console.log("server is running on port : " + PORT)
})
