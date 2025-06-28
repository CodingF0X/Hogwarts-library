import { Module } from '@nestjs/common';
import { AuthorRepository } from './repository/author.repository';
import { AuthorProviders } from './DI/providers/author.providers';
import { AuthorsController } from './interfaces/authors.controller';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { AuthorEntity } from './repository/entities/author.entity';
import { BookEntity } from './repository/entities/book.entity';
import { BooksRepository } from './repository/catalog.repository';

@Module({
  imports: [DatabaseModule.forFeature([AuthorEntity, BookEntity])],
  controllers: [AuthorsController],
  providers: [AuthorRepository, BooksRepository, ...AuthorProviders.all],
  exports: [],
})
export class CatalogModule {}
