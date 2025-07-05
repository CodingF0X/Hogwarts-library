import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/infrastructure/database/abstract.repository';
import { InventoryEntity } from './entities/inventory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { BookNotFoundException, InventoryPersistanceExeption } from '../errors';

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

  public async setQty(bookId: number, qty: number): Promise<InventoryEntity> {
    let inventory = await this.inventoryRepo.findOne({
      where: { book: { id: bookId } },
      relations: ['book'],
    });

    if (!inventory) {
      inventory = this.inventoryRepo.create({
        book: { id: bookId },
        quantity: qty,
      });
    } else {
      inventory.quantity = qty;
    }

    try {
      return await this.inventoryRepo.save(inventory);
    } catch (error:any) {
      if (error.code === '23503') {
        throw new BookNotFoundException(bookId);
      }
      this.logger.error(error);
      throw new InventoryPersistanceExeption(error);
    }
  }
}
