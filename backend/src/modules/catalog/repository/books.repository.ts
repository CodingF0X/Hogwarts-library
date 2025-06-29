import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BooksRepository extends AbstractRepository<BookEntity> {
  protected readonly logger = new Logger(BooksRepository.name);

  constructor(
    @InjectRepository(BookEntity)
    protected readonly book: Repository<BookEntity>,
    protected readonly entityManager: EntityManager,
  ) {
    super(book, entityManager);
  }
}
