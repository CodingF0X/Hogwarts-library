import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { BookEntity } from 'src/modules/catalog/repository/entities/book.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CopyStatus } from '../../enums/status.enum';
import { IBaseCopy } from 'src/infrastructure/database/abstract.base-copy.entity';

@Entity({ schema: 'inventory', name: 'book_copy' })
export class BookCopyEntity extends AbstractEntity<BookCopyEntity> implements IBaseCopy {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    primaryKeyConstraintName: 'PK_book_copy_id',
  })
  id: number;

  @Index()
  @ManyToOne(() => BookEntity, (book) => book.copies, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id', foreignKeyConstraintName:'FK_Book_COPY_BOOK_ID' })
  book: BookEntity;

  @Column({ type: 'enum', enum: CopyStatus, default: CopyStatus.AVAILABLE })
  status: CopyStatus;

  constructor(bookCopy: Partial<BookCopyEntity>) {
    super(bookCopy);
  }
}
