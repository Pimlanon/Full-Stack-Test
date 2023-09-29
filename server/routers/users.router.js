import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.post("/", upload.single("picture"), createUser);
usersRouter.put("/:id", upload.single("picture"), updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
