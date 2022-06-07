import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll (): Promise<User[]> {
    const result = await this.connection.execute('SELECT * FROM TypeScriptExpress.Users')
    
    return result[0] as User[];
  }

  public async getById (id: number): Promise<User> {
    const result = await this.connection.execute('SELECT * FROM TypeScriptExpress.Users WHERE id=?', [id]);

    console.log(result);

    const [data] = result;
    const [user] = data as User[];

    return user as User;
  }

  public async create (user: User) {
    const { id, name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO TypeScriptExpress.Users(id, name, email, password) VALUES (?, ?, ?, ?)',
      [id, name, email, password]);
    
    const { insertId } = result[0];
    
    return {id: insertId, ...user};
  }

  public async update (id: number, user: User) {
    const { name, email, password } = user;

    await this.connection.execute('UPDATE TypeScriptExpress.Users SET name=?, email=?, password=? WHERE id=?',
    [name, email, password, id]);
  }

  public async remove (id: number) {
    await this.connection.execute('DELETE FROM TypeScriptExpress.Users WHERE id=?', [id]);
  }
};