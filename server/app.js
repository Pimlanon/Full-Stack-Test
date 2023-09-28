import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';

async function init() {
  dotenv.config();
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.log(error);
  }

  const app = express();
  const port = 3800;

  app.use(cors());

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}

init();
