import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { UserAccountEntity } from './entities/user-account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserAccountDTO } from '../applications/DTO/create-user.dto';
import { ProfileEntity } from 'src/modules/profile/repository/entities/profile.entity';

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

  public async create(data: CreateUserAccountDTO): Promise<UserAccountEntity> {
    const user = this.entityRepository.create(data);
    const profile = (user.profile = this.entityManager.create(
      ProfileEntity,
      {},
    ));
    if (user && profile) {
      return this.entityManager.save(user);
    } else {
      this.logger.error('Error creating user account');
      throw new BadRequestException('Error creating user account');
    }
  }
}
