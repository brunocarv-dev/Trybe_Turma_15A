import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();

const usersController = new UsersController()

router.get('/users', usersController.getAll);

router.get('/users/:id', usersController.getById);

router.post('/users/', usersController.create);

router.put('/users/:id', usersController.update);

router.delete('/users/:id', usersController.remove)

export default router;