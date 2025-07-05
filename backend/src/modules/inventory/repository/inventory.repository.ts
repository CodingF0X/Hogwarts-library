import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { InventoryEntity } from './entities/inventory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class InventoryRepository extends AbstractRepository<InventoryEntity> {
  protected readonly logger: Logger = new Logger(InventoryRepository.name);

  constructor(
    @InjectRepository(InventoryEntity)
    protected readonly inventoryRepo: Repository<InventoryEntity>,
    protected readonly entityManager: EntityManager,
  ) {
    super(inventoryRepo, entityManager);
  }
}
