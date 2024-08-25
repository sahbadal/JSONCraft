
import path from 'path';
import fs from 'fs';

export const downloadJson = (req, res) => {
  const data = { message: 'This is a test JSON file' }; // Example data
  const filePath = path.join(__dirname, '../temp/data.json');

  // Ensure the temp directory exists
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  // Write JSON data to file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // Serve the file for download
  res.download(filePath, 'data.json', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file');
    } else {
      // Optionally, delete the file after download
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting file:', unlinkErr);
      });
    }
  });
};
