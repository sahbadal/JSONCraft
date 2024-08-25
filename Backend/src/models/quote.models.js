import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ['Inspiration', 'Motivation', 'Life', 'Love', 'Wisdom'],
    default: 'Inspiration',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
