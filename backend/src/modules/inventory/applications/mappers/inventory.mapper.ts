import { Inventory } from '../../domain/entities/inventory.domain';
import { InventoryEntity } from '../../repository/entities/inventory.entity';

export class InventoryMapper {
  public static toInventoryDomain(inventoryEntity: InventoryEntity): Inventory {
    return new Inventory(inventoryEntity);
  }
}
