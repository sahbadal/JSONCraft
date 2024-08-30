import express from 'express';
import {
  getAllCustomData,
  getCustomDataById,
  createCustomData,
  generateCustomData
} from '../controllers/customController.js'; // Importing from customDataController.js

const router = express.Router();

// Route to get all custom data
router.get('/customdata', getAllCustomData);

// Route to get custom data by ID
router.get('/customdata/:id', getCustomDataById);

// Route to create a new custom data record
router.post('/customdata', createCustomData);

// Route to generate fake custom data
router.post('/customdata/generate', generateCustomData);

export default router;
