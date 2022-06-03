import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book.interfaces'

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() : Promise<Book[]> {
    const result = await this.connection
      .execute('SELECT * FROM books');
    console.log(result);
    const [rows] = result;
    return rows as Book[];
  }

  public async getById(id: number) : Promise<Book> {
    const result = await this.connection
      .execute('SELECT * FROM WHERE id = ?', [id]);

    const [rows] = result;
    const [book] = rows as Book[];
    return book as Book;
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book }
  }

  public async update(id: number, book: Book) {
    const { title, price, author, isbn } = book;
    await this.connection
      .execute('UPDATE books SET title=?, price=?, author=?, isbn WHERE id=?',
      [title, price, author, isbn, id]);
  };
}

