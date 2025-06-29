import { BookDomain } from '../../domain/entities/book.entity';
import { BookEntity } from '../../repository/entities/book.entity';

export class BookMapper {
  public static toBookDomain(book: BookEntity): BookDomain {
    return new BookDomain(book);
  }

  public static toBookDomainList(books: BookEntity[]): BookDomain[] {
    return books.map((book) => new BookDomain(book));
  }
}
