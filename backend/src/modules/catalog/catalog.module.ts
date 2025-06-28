import { Module } from '@nestjs/common';
import { AuthorRepository } from './repository/author.repository';
import { AuthorProviders } from './DI/providers/author.providers';
import { AuthorsController } from './interfaces/authors.controller';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { AuthorEntity } from './repository/entities/author.entity';
import { BookEntity } from './repository/entities/book.entity';
import { BooksRepository } from './repository/catalog.repository';
import { BookProviders } from './DI/providers/book.providers';
import { BooksController } from './interfaces/books.controller';

@Module({
  imports: [DatabaseModule.forFeature([AuthorEntity, BookEntity])],
  controllers: [AuthorsController, BooksController],
  providers: [
    AuthorRepository,
    BooksRepository,
    ...AuthorProviders.all,
    ...BookProviders.all,
  ],
  exports: [],
})
export class CatalogModule {}
