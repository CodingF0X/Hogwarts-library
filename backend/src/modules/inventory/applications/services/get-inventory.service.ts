import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { IGetInventoryService } from '../ports/get-Inventory.service.interface';
import { Inventory } from '../../domain/entities/inventory.domain';
import { InventoryRepository } from '../../repository/inventory.repository';
import { InventoryMapper } from '../mappers/inventory.mapper';

@Injectable()
export class GetInventoryService implements IGetInventoryService {
  private readonly logger = new Logger(GetInventoryService.name);

  constructor(private readonly inventoryRepo: InventoryRepository) {}

  async getInventory(): Promise<Inventory[]> {
    try {
      const inventory = await this.inventoryRepo.findAll();
      console.log(inventory);
      return InventoryMapper.toInventoryDomainList(inventory);
    } catch (error) {
      this.logger.error(error.message);
      throw new NotFoundException(error.message);
    }
  }

  async getInventoryByBookId(bookId: number): Promise<Inventory> {
    try {
      const inventory = await this.inventoryRepo.getItemByBookId(bookId);

      return InventoryMapper.toInventoryDomain(inventory);
    } catch (error) {
      this.logger.error(error.message);
      throw new NotFoundException(error.message);
    }
  }
}
