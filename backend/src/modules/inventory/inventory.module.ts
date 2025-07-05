import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { InventoryEntity } from './repository/entities/inventory.entity';
import { InventoryRepository } from './repository/inventory.repository';
import { InventoryProviders } from './DI/inventory.providers';
import { InventoryController } from './interfaces/inventory.controller';

@Module({
  imports: [DatabaseModule.forFeature([InventoryEntity])],
  providers: [InventoryRepository, ...InventoryProviders.all],
  controllers: [InventoryController],
})
export class InventoryModule {}
