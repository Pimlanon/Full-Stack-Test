import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Prefer-not-to-say"],
    },
    picture: {
      type: String,
      required: false,
    },
  },
  {
    collection: "users",
  }
);

export default mongoose.model("User", userSchema);
