import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    priority :{
        type:String,
        required:true,
        enum: ['Low', 'Medium', 'High'],
    },
    status :{
        type:String,
        required:true,
        enum: ['Backlog', 'Todo', 'In Progress','Done','Cancelled'],
    },
})


const Task = mongoose.model('Task',taskSchema);

export default Task;