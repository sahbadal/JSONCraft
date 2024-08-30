import app from './app.js';
import connectDB from './config/dbConnect.js';
import { PORT } from './config/config.js'



// Connect to MongoDB
connectDB()
  .then(() => {

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err)=>{
    console.log(`Error While connecting to Database ${err.message}`)
  })






