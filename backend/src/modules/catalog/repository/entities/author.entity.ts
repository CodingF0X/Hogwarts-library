import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorEntity extends AbstractEntity<AuthorEntity> {
  @PrimaryColumn({ type: 'int', name: 'author_id' })
  declare id: number;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  firstName: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  lastName: string;

  constructor(author: Partial<AuthorEntity>) {
    super(author);
  }
}
