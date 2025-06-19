import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { UserAccountEntity } from './entities/user-account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserAccountRepository extends AbstractRepository<UserAccountEntity> {
  protected logger = new Logger(UserAccountRepository.name);

  constructor(
    @InjectRepository(UserAccountEntity)
    protected readonly entityRepository: Repository<UserAccountEntity>,
    protected readonly entityManager: EntityManager,
  ) {
    super(entityRepository, entityManager);
  }
}
