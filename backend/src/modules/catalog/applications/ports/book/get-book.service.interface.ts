import { BookResponse } from '../../DTO/book/book-response.dto';
import { GetBookDTO } from '../../DTO/book/get-book.dto';

export interface IGetBookService {
  getAll(): Promise<BookResponse[]>;
  getById(id: number): Promise<BookResponse>;
  getBy(query: GetBookDTO): Promise<BookResponse>;
  getAllBy(query: GetBookDTO): Promise<BookResponse[]>;
  //   getByTitle(title: string): Promise<BookResponse>;
  //   getByAuthor(author: string): Promise<BookResponse>;
  //   getByPublisher(publisher: string): Promise<BookResponse>;
}
