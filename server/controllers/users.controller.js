import User from "../models/user.model.js";
import { cloudinaryUploadProfile } from "../utils/upload.js";

// fetch all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    console.log("Users:", users);

    // check if there are no users
    if (!users || users.length === 0) {
      return res.status(404).send({ message: "No users found" });
    }

    return res.json({ data: users });
  } catch (err) {
    return res.status(500).send({ message: "Failed to get users" });
  }
};

//fetch one user
export const getSingleUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ data: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get user", error: error.message });
  }
};

// create a new user
export const createUser = async (req, res) => {
  const userData = req.body;

  //default img
  let image =
    "https://res.cloudinary.com/dvh7erh4q/image/upload/v1695924400/users/IMG_7979_gjogw1.jpg";

  if (req.file) {
    image = await cloudinaryUploadProfile(req.file);
  }

  userData.picture = image;

  console.log("userData: ", userData);

  try {
    const newUser = await User.create(userData);
    res.json({ data: newUser, message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", error: error.message });
  }
};

// update user
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  //default img
  let image =
    "https://res.cloudinary.com/dvh7erh4q/image/upload/v1695924400/users/IMG_7979_gjogw1.jpg";

  if (req.file) {
    try {
      const uploadedImage = await cloudinaryUploadProfile(req.file);
      updatedUserData.picture = uploadedImage;

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updatedUserData,
        {
          new: true,
        }
      );

      // check if there are no users
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ data: updatedUser, message: "User updated successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Failed to update user", error: error.message });
    }
  } else {
    try {
      updatedUserData.picture = image;

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updatedUserData,
        {
          new: true,
        }
      );

      // check if there are no users
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ data: updatedUser, message: "User updated successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update user", error: error.message });
    }
  }
};

// delete user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    // check if there are no users
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};
