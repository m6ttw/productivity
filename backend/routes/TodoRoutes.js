import express from 'express';
import { createTodo, getTodos, getTodo, deleteTodo, updateTodo } from '../controllers/TodoController.js';

const router = express.Router();

// Get all
router.get('/', async (req, res) => {
  const todos = await getTodos();
  res.status(200).send(todos);
});

// Get one
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await getTodo(id);
  res.status(200).send(todo);
});

// Create
router.post('/', async (req, res) => {
  const { title, notes, completed } = req.body;
  const todo = await createTodo(title, notes, completed);
  res.status(201).send(todo);
});

// Update
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { title, notes, completed, } = req.body;
  const todo = await updateTodo(title, notes, completed, id);
  res.status(200).send(todo);
});

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await deleteTodo(id);
  res.status(200).send(todo);
});


export default router;
