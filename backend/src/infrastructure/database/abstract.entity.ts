import {
  Column,
  CreateDateColumn,
  Long,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class AbstractEntity<T> {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  userId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
