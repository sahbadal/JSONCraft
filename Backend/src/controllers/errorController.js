// Function to trigger different types of errors
export const triggerError = (req, res) => {
    const { type } = req.params;
  
    switch (type) {
      case '404':
        // Simulate a 404 Not Found error
        res.status(404).json({ message: 'Resource not found' });
        break;
      case '500':
        // Simulate a 500 Internal Server Error
        res.status(500).json({ message: 'Internal Server Error' });
        break;
      case '403':
        // Simulate a 403 Forbidden error
        res.status(403).json({ message: 'Forbidden' });
        break;
      case '400':
        // Simulate a 400 Bad Request error
        res.status(400).json({ message: 'Bad Request' });
        break;
      default:
        // If no valid type is provided
        res.status(400).json({ message: 'Invalid error type' });
        break;
    }
  };
  