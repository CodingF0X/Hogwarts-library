import { CopyStatus } from 'src/modules/inventory/enums/status.enum';
import { AbstractEntity } from './abstract.entity';
import {
  DeepPartial,
  EntityManager,
  FindManyOptions,
  FindOptionsWhere,
  ObjectType,
  Repository,
} from 'typeorm';
import { ItemNotFoundException } from 'src/modules/inventory/errors';
import { MediaType } from 'src/modules/inventory/enums/media.enum';
import { IBaseCopy } from './abstract.base-copy.entity';

export abstract class AbstractInventory<
  T extends AbstractEntity<T> & IBaseCopy,
> {
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

  async findAvailableCopies(
    itemId: number,
    entityCopy: ObjectType<T>,
    relationKey: string,
    limit: number = 1,
  ): Promise<{id:string, status: CopyStatus}[]> {
    try {
      const opts: FindManyOptions<T> = {
        where: {
          [relationKey]: { id: itemId },
          status: CopyStatus.AVAILABLE,
        } as any,
        take: limit,
        // lock: { mode: 'pessimistic_read' },
        // relations: [relationKey],
        select: ['id', 'status'],
      };

      const copies = await this.entityManager.find(entityCopy, opts);
      if (!copies.length) throw new ItemNotFoundException(itemId, relationKey);

      return copies.map((c) => ({
        id: String(c.id),
        status: c.status,
      })); // just remove this map to return the whole BookCopy object if you want. 
      // remember to change the return type of every function/interface along the line. 
      
      // try to implement this : 

    // i want to return the number of available copies related to the book. i.e: 
  // book details: title, isbn ..etc, 
  // availble copies: 50,
  // on loan: 4

    } catch (error) {
      throw new Error(error.message);
    }
  }

  //   abstract countByStatus(itemId: number, status: CopyStatus): Promise<number>;
  //   abstract updateStatus(copyId: number, status: CopyStatus): Promise<void>;
}
