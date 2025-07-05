import { Inventory } from '../../domain/entities/inventory.domain';

export interface ISetQTY {
  setQuantity(bookId: number, qty: number): Promise<Inventory>;
}
