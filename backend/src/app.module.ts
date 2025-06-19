import { Module } from '@nestjs/common';
import { UsersModule } from './modules/account/users.module';
import { ConfigModule } from './infrastructure/config/config.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [UsersModule, ConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
