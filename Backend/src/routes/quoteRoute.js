import express from 'express';
import {
  getAllQuotes,
  getQuoteById,
  createQuote,
  updateQuote,
  deleteQuote
} from '../controllers/quoteController.js'; // Importing from quoteController.js

const router = express.Router();

// Route to get all quotes
router.get('/listQuotes', getAllQuotes);

// Route to get a quote by ID
router.get('/listQuotes/:id', getQuoteById);

// Route to create a new quote
router.post('/createQuotes', createQuote);

// Route to update a quote by ID
router.put('/quotes/:id', updateQuote);

// Route to delete a quote by ID
router.delete('/quotes/:id', deleteQuote);

export default router;
