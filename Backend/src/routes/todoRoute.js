import express from 'express';
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todoController.js'; // Importing from todoController.js

const router = express.Router();

// Route to get all todos
router.get('/todos', getAllTodos);

// Route to get a todo by ID
router.get('/todos/:id', getTodoById);

// Route to create a new todo
router.post('/todos', createTodo);

// Route to update a todo by ID
router.put('/todos/:id', updateTodo);

// Route to delete a todo by ID
router.delete('/todos/:id', deleteTodo);

export default router;
