import { Router } from 'express';
import {
  getUsers,
  createUser,
  getSingleUser,
} from '../controllers/users.controller.js';

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getSingleUser);
usersRouter.post('/', createUser);

export default usersRouter;
