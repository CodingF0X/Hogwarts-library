import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from './infrastructure/config/config/config.module';

@Module({
  imports: [UsersModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
