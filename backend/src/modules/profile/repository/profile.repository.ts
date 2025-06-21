import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { ProfileEntity } from './entities/profile.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ProfileRepository extends AbstractRepository<ProfileEntity> {
  protected readonly logger = new Logger(ProfileRepository.name);

  constructor(
    @InjectRepository(ProfileEntity)
    protected readonly profileRepo: Repository<ProfileEntity>,
    protected readonly entityManager: EntityManager,
  ) {
    super(profileRepo, entityManager);
  }
}
