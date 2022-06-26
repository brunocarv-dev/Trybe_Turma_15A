import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/users.interface';
import { NotFoundError } from 'restify-errors';

export default class UsersService {
  public model: UsersModel;

  constructor () {
    this.model = new UsersModel(connection);
  }

  public async getAll(): Promise<User[]> {
  const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);

    if (!user) {
      throw new NotFoundError('NotFoundError');
    }

    return user;
  }

  public async create(user: User) {
    return await this.model.create(user);
  }

  public async update(id: number, user: User) {
    await this.model.getById(id);
    
    return this.model.update(id, user);
  }

  public async remove(id: number) {
    await this.model.getById(id);
    await this.model.remove(id);
  }
};