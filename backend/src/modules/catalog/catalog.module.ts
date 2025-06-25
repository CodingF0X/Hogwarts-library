import { Module } from '@nestjs/common';
import { AuthorRepository } from './repository/author.repository';
import { AuthorProviders } from './DI/providers/author.providers';
import { AuthorsController } from './interfaces/authors.controller';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { AuthorEntity } from './repository/entities/author.entity';

@Module({
  imports: [DatabaseModule.forFeature([AuthorEntity])],
  controllers: [AuthorsController],
  providers: [AuthorRepository, ...AuthorProviders.all],
  exports: [],
})
export class CatalogModule {}
