import Joke from '../models/joke.model.js';

// Get all jokes
export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a joke by ID
export const getJokeById = async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findById(id);
    if (!joke) return res.status(404).json({ message: 'Joke not found' });
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new joke
export const createJoke = async (req, res) => {
  const { setup, punchline } = req.body;
  try {
    const newJoke = new Joke({ setup, punchline });
    await newJoke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a joke by ID
export const deleteJoke = async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findByIdAndDelete(id);
    if (!joke) return res.status(404).json({ message: 'Joke not found' });
    res.status(200).json({ message: 'Joke deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
