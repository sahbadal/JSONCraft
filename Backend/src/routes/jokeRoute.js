import express from 'express';
import {
  getAllJokes,
  getJokeById,
  createJoke,
  deleteJoke
} from '../controllers/jokeController.js'; // Importing from jokeController.js

const router = express.Router();

// Route to get all jokes
router.get('/jokes', getAllJokes);

// Route to get a joke by ID
router.get('/jokes/:id', getJokeById);

// Route to create a new joke
router.post('/jokes', createJoke);

// Route to delete a joke by ID
router.delete('/jokes/:id', deleteJoke);

export default router;
