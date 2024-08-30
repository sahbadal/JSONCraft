import mongoose from 'mongoose';
import {MONGO_URI} from './config.js'
import DB_NAME from '../constants.js'


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
