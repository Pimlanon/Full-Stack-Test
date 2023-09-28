import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import usersRouter from "./routers/users.router.js";

async function init() {
  dotenv.config();
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });

  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: `${process.env.DB_NAME}`,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }

  const app = express();
  const port = 3800;

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/users", usersRouter);

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}

init();
