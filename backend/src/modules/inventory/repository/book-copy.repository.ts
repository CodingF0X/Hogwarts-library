import { Injectable, Logger } from '@nestjs/common';
import { BookCopyEntity } from './entities/book-copy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { AbstractInventory } from 'src/infrastructure/database/abstract.inventory';
import { MediaType } from '../enums/media.enum';
import { BookNotFoundException } from '../errors';
import { AvailableBookSummaryDto } from '../applications/DTO/available-copies.dto';
import { BookEntity } from 'src/modules/catalog/repository/entities/book.entity';
import { BookDTO } from '../applications/DTO/book/book.dto';

@Injectable()
export class BookCopyRepository extends AbstractInventory<BookCopyEntity> {
  protected readonly logger = new Logger(BookCopyRepository.name);

  constructor(
    @InjectRepository(BookCopyEntity)
    private readonly bookCopyRepo: Repository<BookCopyEntity>,

    @InjectRepository(BookEntity)
    private readonly bookRepo: Repository<BookEntity>,

    protected readonly entityManager: EntityManager,
  ) {
    super(bookCopyRepo, entityManager);
  }

  public async addCopies(
    bookId: number,
    qty: number,
  ): Promise<BookCopyEntity[]> {
    return await this.insertCopies(bookId, qty, BookCopyEntity, MediaType.BOOK);
  }

  public async getAvailableCopies(
    bookId: number,
  ): Promise<AvailableBookSummaryDto> {
    try {
      const book = await this.bookRepo.findOneBy({ id: bookId });

      if (!book) throw new BookNotFoundException(bookId);

      const copies = await this.findAvailableCopies(
        bookId,
        BookCopyEntity,
        MediaType.BOOK,
        999_999,
      );

      const summary = new AvailableBookSummaryDto();
      summary.book = book;
      summary.available = copies.length;
      summary.copyIds = copies.map((copy) => copy.id);

      return summary;
    } catch (error) {
      this.logger.error(error.message);
      throw new BookNotFoundException(bookId);
    }
  }

  // i want to return the number of available copies related to the book. i.e:
  // book details: title, isbn ..etc,
  // availble copies: 50,
  // on loan: 4
}
