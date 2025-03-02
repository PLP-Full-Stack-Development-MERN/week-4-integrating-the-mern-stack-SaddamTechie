import useTaskStore from "@/store/tasks"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
import { useEffect } from "react";
  
  
  export function TaskTable() {
   const {tasks,fetchTasks} = useTaskStore();
    useEffect(()=>{
        fetchTasks();
    },[fetchTasks])
    console.log(tasks);
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="text-right">__</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell className="font-medium">0001</TableCell>
              <TableCell className="text-start">{task.title}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell className="text-right"><button>Edit</button></TableCell>
            </TableRow>
          ))}
         </TableBody>
         <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  