import mongoose from "mongoose";
import Task from "../models/task.model.js"
import {faker} from "@faker-js/faker"
import dotenv from "dotenv"
dotenv.config()


mongoose.connect(process.env.MONGO_URI);


const generateFakeData = async ()=>{
    try {
        for(let i=0;i<10;i++){
            const task = new Task({
                title:faker.lorem.sentence(),
                status:faker.helpers.arrayElement(['Backlog', 'Todo', 'In Progress','Done','Cancelled']),
                priority:faker.helpers.arrayElement(['Low', 'Medium', 'High'])
             })
         
             await task.save()
             console.log(`Task ${i+1} saved`)
        }
    } catch (error) {
        console.log("Error",error)
    } finally{
        mongoose.disconnect();
    }
    
}

generateFakeData();