import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuthorEntity } from './author.entity';

@Entity({ schema: 'catalog', name: 'books' })
export class BookEntity extends AbstractEntity<BookEntity> {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    primaryKeyConstraintName: 'PK_book_id',
  })
  id: number;

  @ManyToMany(() => AuthorEntity, (author) => author.books, {
    eager: true,
    nullable: false,
    onDelete:'CASCADE' 
  })
  authors: AuthorEntity[];

  @Column({ type: 'varchar', nullable: false, length: 255 })
  title: string;

  @Column({ type: 'varchar', nullable: true, length: 255 })
  description: string;

  @Column({ type: 'varchar', nullable: false, length: 255, unique: true })
  ISBN: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  category: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  publisher: string;

  @Column({ type: 'date', nullable: true })
  publication_date: Date;

  //   @Column({ type: 'int', nullable: false })
  //   pages: number;

  @Column({ type: 'varchar', nullable: true, length: 255 })
  thumbnail_url: string;

  constructor(book: Partial<BookEntity>) {
    super(book);
  }
}
