import { Injectable, Logger } from '@nestjs/common';
import { BookCopyEntity } from './entities/book-copy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { AbstractInventory } from 'src/infrastructure/database/abstract.inventory';
import { MediaType } from '../enums/media.enum';

@Injectable()
export class BookCopyRepository extends AbstractInventory<BookCopyEntity> {
  protected readonly logger = new Logger(BookCopyRepository.name);

  constructor(
    @InjectRepository(BookCopyEntity)
    private readonly bookCopyRepo: Repository<BookCopyEntity>,
    protected readonly entityManager: EntityManager,
  ) {
    super(bookCopyRepo, entityManager);
  }

  public async addCopies(
    bookId: number,
    qty: number,
  ): Promise<BookCopyEntity[]> {
    return await this.insertCopies(
      bookId,
      qty,
      BookCopyEntity,
      MediaType.BOOK,
    );
  }
}
