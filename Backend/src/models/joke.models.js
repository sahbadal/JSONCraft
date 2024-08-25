import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true,
    trim: true,
  },
  punchline: {
    type: String,
    required: true,
    trim: true,
  },
});

const Joke = mongoose.model('Joke', jokeSchema);

export default Joke;
