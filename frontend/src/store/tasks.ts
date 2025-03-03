import axios from "axios"
import {create} from "zustand"
const apiUrl = "http://127.0.0.1:8000"
import { toast } from "sonner"

export type Task = {
    _id: string
    title:string
    status: "Backlog" | "Todo" | "In Progress" | "Done" | "Cancelled"
    priority: "Low" | "Medium" | "High"
  }

const useTaskStore = create((set)=>({
    tasks:[],
    fetchTasks:async () =>{
        try {
            const response =  await axios.get(`${apiUrl}/api/tasks`)
            set({tasks:response.data})
        } catch (error) {
            console.log("Error",error)
        }
      
    },
    createTask:async (newTask:Task) =>{
        try {
            const response = await axios.post(`${apiUrl}/api/tasks`,newTask)
            set((state:any)=>({
                tasks:[...state.tasks,response.data]
            }))
        } catch (error) {
            console.log("error",error)
        }
    },
    updateTask:async (taskId:string,updatedTask:Task) =>{
        try {
            await axios.put(`${apiUrl}/api/tasks`,updatedTask)
            set((state:any)=>({
                tasks:state.tasks.map((task:any)=>task.id===taskId?updatedTask:task)
            }))
        } catch (error) {
            console.log("Error",error)
        }
    },
    deleteTask:async (taskId:string) =>{
        try {
            await axios.delete(`${apiUrl}/api/tasks/${taskId}`)
            toast("Task deleted")
            set((state:any)=>({
                tasks:state.tasks.filter((task:any)=>task.id!==taskId)
            }))
        } catch (error) {
            console.log("error",error)
        }
    }
}))

export default useTaskStore;