import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/complexUserController.js'; // Importing from complexUserController.js

const router = express.Router();

// Route to get all users
router.get('/listComplexUsers', getAllUsers);

// Route to get a user by ID
router.get('/listComplexUsers/:id', getUserById);

// Route to create a new user
router.post('/createComplexUsers', createUser);

// Route to update a user by ID
router.put('/users/:id', updateUser);

// Route to delete a user by ID
router.delete('/users/:id', deleteUser);

export default router;
