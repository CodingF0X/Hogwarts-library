import { BookDomain } from 'src/modules/catalog/domain/entities/book.entity';
import { CopyStatus } from '../../repository/status.enum';

export class BookCopy {
  public readonly id: number;
  public readonly book: BookDomain;
  public readonly status: CopyStatus;

  constructor(input: Partial<BookCopy>) {
    if (!input.id) throw new Error('Id required');
    if (!input.book) throw new Error('Book required');
    if (!input.status) throw new Error('Status required');

    this.id = input.id;
    this.book = input.book;
    this.status = input.status;
    // if (input.status === CopyStatus.AVAILABLE && input.book.copies.length === 0)
    //   throw new Error('Book not available');
    // if (input.status === CopyStatus.ON_LOAN && input.book.copies.length > 0)
    //   throw new Error('Book not available, Please come back later');
  }
}
