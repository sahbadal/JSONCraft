import express from 'express';
import { triggerError } from '../controllers/errorController.js'; // Importing from errorController.js

const router = express.Router();

// Route to trigger different types of errors
router.get('/simulate-error/:type', triggerError);

export default router;
