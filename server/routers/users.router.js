import { Router } from 'express';
import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
} from '../controllers/users.controller.js';

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getSingleUser);
usersRouter.post('/', createUser);
usersRouter.put('/:id', updateUser);

export default usersRouter;
