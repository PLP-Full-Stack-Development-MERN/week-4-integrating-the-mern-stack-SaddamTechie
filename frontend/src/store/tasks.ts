import axios from "axios"
import {create} from "zustand"
const apiUrl = "http://127.0.0.1:8000"


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
    createTask:async (newTask) =>{
        try {
            const response = await axios.post(`${apiUrl}/api/tasks`,newTask)
            set((state)=>({
                tasks:[...state.tasks,response.data]
            }))
        } catch (error) {
            console.log("error",error)
        }
    },
    updateTask:async (taskId,updatedTask) =>{
        try {
            await axios.put(`${apiUrl}/api/tasks`,updatedTask)
            set((state)=>({
                tasks:state.tasks.map((task)=>task.id===taskId?updatedTask:task)
            }))
        } catch (error) {
            console.log("Error",error)
        }
    },
    deleteTask:async (taskId) =>{
        try {
            await axios.delete(`${apiUrl}/api/tasks`)
            set((state)=>({
                tasks:state.tasks.filter((task)=>task.id!==taskId)
            }))
        } catch (error) {
            console.log("error",error)
        }
    }
}))

export default useTaskStore;