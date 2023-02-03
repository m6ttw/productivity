import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

// Retrieve all users
router.get('/users', getUsers);

// Retrieve a single user by ID
router.get('/user/:id', getUser);

// Create a new user
router.post('/user', createUser);

// Update a user by ID
router.put('/user/:id', updateUser);

// Delete a user by ID
router.delete('/user/:id', deleteUser);

export default router;