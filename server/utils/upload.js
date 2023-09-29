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

    // Remove the local file after successful upload
    await fs.unlink(file.path);

    return fileUrl;
  } catch (error) {
    // Handle any errors that occur during upload or file deletion
    console.error(
      "Error uploading to Cloudinary or deleting local file:",
      error
    );
    throw new Error("Failed to upload image");
  }
};
