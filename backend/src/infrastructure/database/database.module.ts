import { Module } from '@nestjs/common';
import { ConfigModule, typeOrmConfig } from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
  ],

  providers: [],
})
export class DatabaseModule {
  static forFeature(entities: any[]) {
    return TypeOrmModule.forFeature(entities);
  }
}
