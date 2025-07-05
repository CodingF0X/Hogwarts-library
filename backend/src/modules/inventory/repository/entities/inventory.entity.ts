import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { BookEntity } from 'src/modules/catalog/repository/entities/book.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'inventory', name: 'inventory' })
export class InventoryEntity extends AbstractEntity<InventoryEntity> {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    primaryKeyConstraintName: 'PK_Inventory_id',
  })
  id: number;

  @OneToOne(() => BookEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' , foreignKeyConstraintName:'FK_book_id'})
  book: BookEntity;

  @Column({ type: 'int', nullable: false, default: 0 })
  quantity: number;

  constructor(inventory: Partial<InventoryEntity>) {
    super(inventory);
  }
}
