import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IGetBookService } from '../../ports/book/get-book.service.interface';
import { BookResponse } from '../../DTO/book/book-response.dto';
import { BooksRepository } from 'src/modules/catalog/repository/books.repository';
import { BookEntity } from 'src/modules/catalog/repository/entities/book.entity';
import { BookMapper } from '../../mapper/book.mapper';
import { GetBookDTO } from '../../DTO/book/get-book.dto';

@Injectable()
export class GetBookService implements IGetBookService {
  private readonly logger = new Logger(GetBookService.name);

  constructor(private readonly booksRepo: BooksRepository) {}

  async getAll(): Promise<BookResponse[]> {
    try {
      const books = await this.booksRepo.find({});
      return BookMapper.toBookDomainList(books);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  async getAllBy(query: GetBookDTO): Promise<BookResponse[]> {

    console.log(query)
     try {
      const books = await this.booksRepo.getAllBy(query);
      return BookMapper.toBookDomainList(books);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  async getBy(query: GetBookDTO): Promise<BookResponse> {
    const conditions = Object.entries(query)
      .filter(([key, value]) => value !== undefined)
      .reduce(
        //accum     // current item (from Object.Entries(..))
        (accumulator, [key, value]) => {
          accumulator[key] = value;
          return accumulator;
        },
        // initial value (could be anything .. array/object ..etc)
        {} as Record<string, any>,
      );
    if (Object.keys(conditions).length === 0) {
      throw new BadRequestException(
        'At least one query parameter must be provided',
      );
    }
    try {
      const book = await this.booksRepo.findOne(conditions);
      console.log(book);
      return BookMapper.toBookDomain(book);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  async getById(id: number): Promise<BookResponse> {
    try {
      const book = await this.booksRepo.findOneById({ id });
      return BookMapper.toBookDomain(book);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
