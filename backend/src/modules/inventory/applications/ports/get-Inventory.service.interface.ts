import { Inventory } from '../../domain/entities/inventory.domain';

export interface IGetInventoryService {
  getInventory(): Promise<Inventory[]>;
  getInventoryByBookId(bookId: number): Promise<Inventory>;
}
