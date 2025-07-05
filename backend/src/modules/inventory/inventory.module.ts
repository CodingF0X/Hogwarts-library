import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { InventoryEntity } from './repository/entities/inventory.entity';

@Module({
  imports: [DatabaseModule.forFeature([InventoryEntity])],
})
export class InventoryModule {}
