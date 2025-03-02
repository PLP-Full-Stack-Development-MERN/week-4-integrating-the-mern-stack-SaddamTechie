import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import taskRouter from './routes/task.route.js'
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT;
const app = express();

//Config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/tasks',taskRouter)

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})