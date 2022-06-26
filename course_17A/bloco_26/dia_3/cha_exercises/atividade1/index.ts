import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import validationUniversal from './middlewares/universalError.middleware';
import UsersRouter from './routers/users.router';

const app = express();

app.use(express.json());

const PORT = 9001;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: 'Express + Typescript' });
});

app.use(UsersRouter);

app.use(validationUniversal);

app.listen(PORT, () => {
  console.log('Server running:', PORT);
});