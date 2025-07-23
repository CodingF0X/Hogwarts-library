import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IFindAvalableBooksService } from '../../ports/books/find-available-books.interface';
import { BookCopyRepository } from 'src/modules/inventory/repository/book-copy.repository';
import { AvailableBookSummaryDto } from '../../DTO/available-copies.dto';

@Injectable()
export class FindAvailableBooksService implements IFindAvalableBooksService {
  private readonly logger = new Logger(FindAvailableBooksService.name);

  constructor(private readonly booksCopyRepo: BookCopyRepository) {}

  async findAvailableBooks(bookId: number): Promise<AvailableBookSummaryDto> {
    try {
      const copies = await this.booksCopyRepo.getAvailableCopies(bookId);
      return copies
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
