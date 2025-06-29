import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataSource,
  EntityManager,
  Repository,
  In,
} from 'typeorm';
import { BookEntity } from './entities/book.entity';
import { AuthorEntity } from './entities/author.entity';
import { CreateBookDTO } from '../applications/DTO/book/create-book.dto';

@Injectable()
export class BooksRepository extends AbstractRepository<BookEntity> {
  protected readonly logger = new Logger(BooksRepository.name);

  constructor(
    @InjectRepository(BookEntity)
    protected readonly bookRepo: Repository<BookEntity>,
    protected readonly entityManager: EntityManager,
    private readonly dataSource: DataSource,
  ) {
    super(bookRepo, entityManager);
  }

  async create(data: CreateBookDTO): Promise<BookEntity> {
    try {
      const authors = await this.dataSource
        .getRepository(AuthorEntity)
        .findBy({ id: In(data.authorIds) });

      const foundIds = authors.map((a) => Number(a.id));
      const missing = data.authorIds.filter((id) => !foundIds.includes(id));

      if (missing.length) {
        throw new BadRequestException(
          `Authors with IDs ${missing.join(', ')} not found`,
        );
      }

      const book = await this.bookRepo.create({ ...data, authors });
      return await this.bookRepo.save(book);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
