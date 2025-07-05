import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { IGetQty } from '../ports/get-qty.service.interface';
import { InventoryRepository } from '../../repository/inventory.repository';
import { InventoryMapper } from '../mappers/inventory.mapper';
import { BookNotFoundException } from '../../errors';

@Injectable()
export class GetQuantityService implements IGetQty {
  private readonly logger = new Logger(GetQuantityService.name);

  constructor(private readonly InventoryRepo: InventoryRepository) {}

  async getQuantity(bookId: number): Promise<number> {
    try {
      const book = await this.InventoryRepo.findOne({ book: { id: bookId } });

      return book.quantity;
    } catch (error) {
      if (error instanceof BookNotFoundException) {
        throw new NotFoundException(error.message);
      }

      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
