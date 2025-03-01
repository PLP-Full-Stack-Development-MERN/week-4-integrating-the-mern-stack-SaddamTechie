import express from 'express';
import { getTasks,createTask,updateTaskById,deleteTaskById } from '../controllers/task.controller.js'
const router = express.Router();

router.get('/',getTasks)
router.post('/',createTask)
router.put('/:id',updateTaskById)
router.delete('/:id',deleteTaskById)

export default router;