import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'authors', name: 'authors' })
export class AuthorEntity extends AbstractEntity<AuthorEntity> {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    primaryKeyConstraintName: 'PK_author_id',
  })
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  firstName: string;

  @Column({ type: 'varchar', nullable: false, length: 255, unique: true })
  lastName: string;

  constructor(author: Partial<AuthorEntity>) {
    super(author);
  }
}
