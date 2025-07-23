import { BookCopy } from '../../domain/entities/book-copy.domain';
import { BookCopyEntity } from '../../repository/entities/book-copy.entity';

export class BookCopyMapper {
  public static toBookCopy(bookCopy: BookCopyEntity): BookCopy {
    return new BookCopy(bookCopy);
  }

  public static toBookCopiesList(bookCopies: BookCopyEntity[]): BookCopy[] {
    return bookCopies.map((bookCopy) => new BookCopy(bookCopy));
  }
}
