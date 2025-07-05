import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ISetQTY } from '../ports/set-qty.service.interface';
import { Inventory } from '../../domain/entities/inventory.domain';
import { InventoryRepository } from '../../repository/inventory.repository';
import { InventoryMapper } from '../mappers/inventory.mapper';
import {
  BookNotFoundException,
  InventoryPersistanceExeption,
} from '../../errors';

@Injectable()
export class SetQtyService implements ISetQTY {
  private readonly logger: Logger = new Logger(SetQtyService.name);

  constructor(private readonly InventoryRepo: InventoryRepository) {}

  async setQuantity(bookId: number, qty: number): Promise<Inventory> {
    try {
      const inventory = await this.InventoryRepo.setQty(bookId, qty);

      return InventoryMapper.toInventoryDomain(inventory);
    } catch (error) {
      if (error instanceof BookNotFoundException) {
        throw new NotFoundException(error.message);
      }
      if (error instanceof InventoryPersistanceExeption) {
        throw new BadRequestException(error.message);
      } else {
        this.logger.error(error.message);
        throw new Error(error.message);
      }
    }
  }
}
