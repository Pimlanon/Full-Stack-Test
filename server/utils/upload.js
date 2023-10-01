import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

export const cloudinaryUploadProfile = async (file) => {
  if (!file) {
    throw new Error("No file provided!!!");
  }

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "users",
      type: "private",
    });

    const fileUrl = result.secure_url;

    //remove the local file after successful upload
    await fs.unlink(file.path);

    return fileUrl;
  } catch (error) {
    console.error(
      "Error uploading to Cloudinary or deleting local file:",
      error
    );
  }
};
