import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import BooksRoutes from './routes/books.routes';

const app = express();

app.use(express.json());

const PORT = 9000;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + Typescript');
});

app.use(BooksRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;

    case 'NotFoundError':
      res.status(404).json({ message: details[0].message })
      break;

    case 'ConflictError':
      res.status(409).json({ message });
      break;

    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

app.listen(PORT, () => console.log('Rodando na porta', PORT));
