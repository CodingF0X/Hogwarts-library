import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IDeleteBookService } from '../../ports/book/delete-book.service.interface';
import { BooksRepository } from 'src/modules/catalog/repository/books.repository';

@Injectable()
export class DeleteBookService implements IDeleteBookService {
  private readonly logger = new Logger(DeleteBookService.name);

  constructor(private readonly booksRepo: BooksRepository) {}

  async delete(id: number): Promise<string> {
    try {
      const book = await this.booksRepo.findOneAndDelete({ id });
      return book;
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
