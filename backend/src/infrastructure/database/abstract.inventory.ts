import { CopyStatus } from 'src/modules/inventory/enums/status.enum';
import { AbstractEntity } from './abstract.entity';
import { DeepPartial, EntityManager, ObjectType, Repository } from 'typeorm';
import { ItemNotFoundException } from 'src/modules/inventory/errors';

export abstract class AbstractInventory<T extends AbstractEntity<T>> {
  constructor(
    protected readonly entityRepository: Repository<T>,
    protected readonly entityManager: EntityManager,
  ) {}

  async insertCopies<T>(
    itemId: number,
    qty: number,
    entityCopy: ObjectType<T>,
    relationKey: string,
  ): Promise<T[]> {
    try {
      const copies: T[] = await this.entityManager.transaction(
        async (manager) => {
          const bulk = Array.from({ length: qty }, () =>
            manager.create(entityCopy, {
              [relationKey]: { id: itemId },
              status: CopyStatus.AVAILABLE,
            } as DeepPartial<T>),
          );

          return manager.save(entityCopy, bulk);
        },
      );

      return copies;
    } catch (error) {
      if (error.code === '23503') {
        throw new ItemNotFoundException(itemId, relationKey);
      }

      throw new Error(error.message);
    }
  }

  //   abstract findAvailableCopy(itemId: number): Promise<T | null>;
  //   abstract countByStatus(itemId: number, status: CopyStatus): Promise<number>;
  //   abstract updateStatus(copyId: number, status: CopyStatus): Promise<void>;
}
