import mongoose from "mongoose"
import Task from "../models/task.model.js"


export const getTasks = async(req,res) =>{
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks)
    } catch (error) {
        console.error(error)
        res.status(500).json({"message":"Server error"})
    }
}

export const createTask = async(req,res) =>{
    const task = req.body;
    if(!task.title||!task.description||!task.status||!task.dueDate){
        return res.status(400).json({success:false,message:"Please provide all fields"});
    }
    
    const newTask  = new Task(task)

    try {
        await newTask.save();
        res.status(201).json({success:true,data:newTask})
    } catch (error) {
        console.error(error)        
        res.status(500).json({"message":"Server error"})
    }
    res.status(500).json({"message":"Server error"})
}


export const updateTaskById = async(req,res) =>{
    const {id:id} = req.params;
    const task = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No task with that id');
    }
    try {
        const updatedTask = await Task.findByIdAndUpdate(id,task,{new:true})
        res.status(200).json(updatedTask)
    } catch (error) {
        console.error(error)
        res.status(500).json({"message":"Server error"})
    }
}

export const deleteTaskById = async(req,res) =>{
    const {id:id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No task with that id');
    }

    try {
        await Task.findOneAndDelete(id);
        res.status(200).json({message:"Task deleted successfully"})
    } catch (error) {
        console.error(error)
        res.status(500).json({"message":"Server error"})
    }
}