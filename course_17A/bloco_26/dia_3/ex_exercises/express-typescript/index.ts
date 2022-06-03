import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import BooksRoutes from './routes/book.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + Typescript')
});

app.use(BooksRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch(name) {
    case 'ValidationError':
      res.status(400).json({ message: details.message });

    case 'NotFoundError':
      res.status(400).json({ message });
    
    case 'ConflictError':
      res.status(400).json({ message })

    default:
      console.error(err);
      res.sendStatus(500);
  }
})


app.listen(PORT, () => console.log('Server rodando na porta', PORT));