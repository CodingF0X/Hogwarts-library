import { CreateBookDTO } from '../../DTO/book/create-book.dto';
import { BookResponse } from '../../DTO/book/book-response.dto';

export interface ICreateBookService {
  create(data: CreateBookDTO): Promise<BookResponse>;
}
