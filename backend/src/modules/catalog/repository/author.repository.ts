import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { AuthorEntity } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class AuthorRepository extends AbstractRepository<AuthorEntity> {
  protected readonly logger = new Logger(AuthorRepository.name);

  constructor(
    @InjectRepository(AuthorEntity)
    protected readonly author: Repository<AuthorEntity>,
    protected readonly entityManager: EntityManager,
  ) {
    super(author, entityManager);
  }
}
