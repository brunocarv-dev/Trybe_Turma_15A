import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

export default class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.usersService.getAll();
    return res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    const user = await this.usersService.getById(id);

    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.usersService.create(user);

    res.status(StatusCodes.CREATED).json(userCreated)
  }

  public update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = req.body;

    await this.usersService.update(id, book);
  }

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await this.usersService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'Book deleted successfully' })
  }
};