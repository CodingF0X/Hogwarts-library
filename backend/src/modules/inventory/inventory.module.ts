import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { InventoryEntity } from './repository/entities/inventory.entity';
import { InventoryRepository } from './repository/inventory.repository';
import { InventoryProviders } from './DI/inventory.providers';
import { InventoryController } from './interfaces/inventory.controller';
import { BookCopyEntity } from './repository/entities/book-copy.entity';
import { BooksInventoryController } from './interfaces/book-inventory.controller';
import { BookCopyRepository } from './repository/book-copy.repository';
import { BookEntity } from '../catalog/repository/entities/book.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([InventoryEntity, BookCopyEntity, BookEntity]),
  ],
  providers: [
    InventoryRepository,
    BookCopyRepository,
    ...InventoryProviders.all,
  ],
  controllers: [InventoryController, BooksInventoryController],
})
export class InventoryModule {}
