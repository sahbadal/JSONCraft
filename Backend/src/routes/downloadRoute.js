
import express from 'express';
import { downloadJson } from '../controllers/downloadController.js';

const router = express.Router();

// Route to download JSON file
router.get('/download-json', downloadJson);

export default router;
