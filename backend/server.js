import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import taskRouter from './routes/task.route.js'
import cors from 'cors'
import path from 'node:path'

dotenv.config();
const PORT = process.env.PORT;
const app = express();

//Config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __dirname = path.resolve();

//Routes
app.use('/api/tasks',taskRouter)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
 
    app.get("*",(req,res)=>{
     res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
 }


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})