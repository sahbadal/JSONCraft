import express from 'express';
import {
  getAllJokes,
  getJokeById,
  createJoke,
  deleteJoke
} from '../controllers/jokeController.js'; // Importing from jokeController.js

const router = express.Router();

// Route to get all jokes
router.get('/listJokes', getAllJokes);

// Route to get a joke by ID
router.get('/listJokes/:id', getJokeById);

// Route to create a new joke
router.post('/createJokes', createJoke);

// Route to delete a joke by ID
router.delete('/jokes/:id', deleteJoke);

export default router;
