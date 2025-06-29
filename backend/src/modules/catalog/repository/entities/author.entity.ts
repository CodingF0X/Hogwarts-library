import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookEntity } from './book.entity';

@Entity({ schema: 'catalog', name: 'authors' })
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

  @ManyToMany(() => BookEntity, (book) => book.authors, { onDelete: 'CASCADE' })
  @JoinTable({
    name: 'authors_books',
    joinColumn: {
      name: 'author_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'author_id_join',
    },
    inverseJoinColumn: {
      name: 'book_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'book_id_join',
    },
  })
  books: BookEntity[];

  constructor(author: Partial<AuthorEntity>) {
    super(author);
  }
}
