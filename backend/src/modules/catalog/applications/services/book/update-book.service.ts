import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IUpdateBookService } from '../../ports/book/update-book.service.interface';
import { BookResponse } from '../../DTO/book/book-response.dto';
import { UpdateBookDTO } from '../../DTO/book/update-book.dto';
import { BooksRepository } from 'src/modules/catalog/repository/books.repository';
import { BookMapper } from '../../mapper/book.mapper';

@Injectable()
export class UpdateBookService implements IUpdateBookService {
  private readonly logger = new Logger(UpdateBookService.name);

  constructor(private readonly booksRepo: BooksRepository) {}

  async update(id: number, data: UpdateBookDTO): Promise<BookResponse> {
    try {
      const book = await this.booksRepo.findOneAndUpdate({ id }, data);
      return BookMapper.toBookDomain(book);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
