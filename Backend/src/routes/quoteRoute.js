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
router.get('/quotes', getAllQuotes);

// Route to get a quote by ID
router.get('/quotes/:id', getQuoteById);

// Route to create a new quote
router.post('/quotes', createQuote);

// Route to update a quote by ID
router.put('/quotes/:id', updateQuote);

// Route to delete a quote by ID
router.delete('/quotes/:id', deleteQuote);

export default router;
