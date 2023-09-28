import { Router } from 'express';
import { getUsers, createUser } from '../controllers/users.controller.js';

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
// usersRouter.get('/:id', getSingleUser);

export default usersRouter;
