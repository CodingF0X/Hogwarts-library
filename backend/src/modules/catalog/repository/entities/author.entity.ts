import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'authors', name: 'authors' })
export class AuthorEntity extends AbstractEntity<AuthorEntity> {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    primaryKeyConstraintName: 'mmeaid',
  })
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  firstName: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  lastName: string;

  constructor(author: Partial<AuthorEntity>) {
    super(author);
  }
}
