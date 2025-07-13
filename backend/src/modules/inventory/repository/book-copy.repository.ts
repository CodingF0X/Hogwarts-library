import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { BookCopyEntity } from './entities/book-copy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { BookNotFoundException, InventoryPersistanceExeption } from '../errors';
import { CopyStatus } from './status.enum';

@Injectable()
export class BookCopyRepository extends AbstractRepository<BookCopyEntity> {
  protected readonly logger = new Logger(BookCopyRepository.name);

  constructor(
    @InjectRepository(BookCopyEntity)
    private readonly BookCopyRepo: Repository<BookCopyEntity>,
    protected readonly entityManager: EntityManager,
  ) {
    super(BookCopyRepo, entityManager);
  }

  public async insertBookCopies(
    bookId: number,
    qty: number,
  ): Promise<BookCopyEntity[]> {
    try {
      const copies = await this.BookCopyRepo.manager.transaction(
        async (manager) => {
          const bulk = Array.from({ length: qty }, (_, i) =>
            manager.create(BookCopyEntity, {
              book: { id: bookId },
              status: CopyStatus.AVAILABLE,
            }),
          );

          await manager.save(BookCopyEntity, bulk);
          return bulk;
        },
      );

      return copies;
    } catch (error) {
      this.logger.error(error.message);

      if (error.code === '23503') {
        throw new BookNotFoundException(bookId);
      }

      this.logger.error(error);
      throw new InventoryPersistanceExeption(error);
    }
  }
}
