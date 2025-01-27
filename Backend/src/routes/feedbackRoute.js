import express from 'express';
const router = express.Router();
import { submitFeedback } from '../controllers/feedbackController.js';


router.post('/feedback', submitFeedback);

export default router;
