import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ICreateBookService } from '../../ports/book/create-book.service.interface';
import { BooksRepository } from 'src/modules/catalog/repository/books.repository';
import { BookDomain } from 'src/modules/catalog/domain/entities/book.entity';
import { CreateBookDTO } from '../../DTO/book/create-book.dto';
import { BookMapper } from '../../mapper/book.mapper';
import { BookResponse } from '../../DTO/book/book-response.dto';

@Injectable()
export class CreateBookService implements ICreateBookService {
  private readonly logger = new Logger(CreateBookService.name);

  constructor(private readonly booksRepo: BooksRepository) {}

  async create(data: CreateBookDTO): Promise<BookResponse> {
    try {
      const book = await this.booksRepo.create(data);
      console.log(BookMapper.toBookDomain(book))
      return BookMapper.toBookDomain(book);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
