import { BookResponse } from '../../DTO/book/book-response.dto';
import { UpdateBookDTO } from '../../DTO/book/update-book.dto';

export interface IUpdateBookService {
  update(id: number, data: UpdateBookDTO): Promise<BookResponse>;
}
