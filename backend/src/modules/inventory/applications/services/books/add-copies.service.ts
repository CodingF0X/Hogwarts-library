import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IAddBookCopiesService } from '../../ports/books/add-copies.service.interface';
import { BookCopy } from 'src/modules/inventory/domain/entities/book-copy.domain';
import { BookCopyRepository } from 'src/modules/inventory/repository/book-copy.repository';

@Injectable()
export class AddBookCopiesService implements IAddBookCopiesService {
  private readonly logger = new Logger(AddBookCopiesService.name);

  constructor(private readonly bookCopyRepo: BookCopyRepository) {}

  async insertCopies(bookId: number, qty: number): Promise<BookCopy[]> {
    try {
      const copies = await this.bookCopyRepo.insertBookCopies(bookId, qty);
      console.log(copies)
      return copies.map((copy) => new BookCopy(copy));
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
