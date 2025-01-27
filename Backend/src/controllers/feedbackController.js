import Feedback from "../models/feedback.models.js";

export const submitFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create new feedback entry
        const newFeedback = new Feedback({
            name,
            email,
            message
        });

        // Save feedback to database
        await newFeedback.save();

        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback: newFeedback
        });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
};
