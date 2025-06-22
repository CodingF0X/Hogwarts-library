import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractAudit {
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
