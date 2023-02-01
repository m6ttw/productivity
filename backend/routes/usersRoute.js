import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/usersController.js';

const router = express.Router();

// Create a new user
router.post('/user', createUser);

// Retrieve all users
router.get('/users', getUsers);

// Retrieve a single user by ID
router.get('/user/:id', getUser);

// Delete a user by ID
router.delete('/user/:id', deleteUser);

// Update a user by ID
router.put('/user/:id', updateUser);

export default router;