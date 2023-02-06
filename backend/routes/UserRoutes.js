import express from 'express';
const router = express.Router();

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/UserController.js';


// Get all
router.get('/', async (req, res) => {
  const users = await getUsers();
  res.status(200).send(users);
})

// Get one
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.status(200).send(user);
})

// Create
router.post('/', async (req, res) => {
  const { username, password, email } = req.body;
  const user = await createUser(username, password, email);
  res.status(201).send(user);
})

// Update
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { username, password, email, } = req.body;
  const user = await updateUser(username, password, email, id);
  res.status(200).send(user);
})

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await deleteUser(id);
  res.status(200).send(user);
})


export default router;
