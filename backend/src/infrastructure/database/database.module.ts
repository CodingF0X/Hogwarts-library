import { Module } from '@nestjs/common';
import { ConfigModule, typeOrmConfig } from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SchemaBootstrapService } from './bootstrap-schema.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
  ],

  providers: [SchemaBootstrapService],
})
export class DatabaseModule {}
