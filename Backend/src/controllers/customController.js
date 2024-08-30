import CustomData from '../models/custom.models.js';

// Get all custom data
export const getAllCustomData = async (req, res) => {
  try {
    const customData = await CustomData.find();
    res.status(200).json(customData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get custom data by ID
export const getCustomDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const customData = await CustomData.findById(id);
    if (!customData) return res.status(404).json({ message: 'Custom data not found' });
    res.status(200).json(customData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new custom data record
export const createCustomData = async (req, res) => {
  const customData = req.body;
  try {
    const newCustomData = new CustomData(customData);
    await newCustomData.save();
    res.status(201).json(newCustomData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Generate fake custom data
export const generateCustomData = async (req, res) => {
  const { numberOfRecords } = req.body;
  try {
    const fakeData = CustomData.generateFakeData(numberOfRecords);
    res.status(200).json(fakeData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
