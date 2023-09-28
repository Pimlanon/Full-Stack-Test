import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

export const cloudinaryUploadProfile = async (file) => {
  if (!file) {
    throw new Error("No file provided!!!");
  }

  const result = await cloudinary.uploader.upload(file.path, {
    folder: "users",
    type: "private",
  });

  const fileURl = result.secure_url;
  await fs.unlink(file.path);

  return fileURl;
};
