import Quote from '../models/quote.models.js';

// Get all quotes
export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a quote by ID
export const getQuoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await Quote.findById(id);
    if (!quote) return res.status(404).json({ message: 'Quote not found' });
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new quote
export const createQuote = async (req, res) => {
  const { text, author, category } = req.body;
  try {
    const newQuote = new Quote({
      text,
      author,
      category,
    });
    await newQuote.save();
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a quote by ID
export const updateQuote = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedQuote = await Quote.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedQuote) return res.status(404).json({ message: 'Quote not found' });
    res.status(200).json(updatedQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a quote by ID
export const deleteQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await Quote.findByIdAndDelete(id);
    if (!quote) return res.status(404).json({ message: 'Quote not found' });
    res.status(200).json({ message: 'Quote deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
