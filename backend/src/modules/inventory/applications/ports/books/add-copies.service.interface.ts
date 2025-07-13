import { BookCopy } from 'src/modules/inventory/domain/entities/book-copy.domain';

export interface IAddBookCopiesService {
  insertCopies(bookId: number, qty: number): Promise<BookCopy[]>;
}
