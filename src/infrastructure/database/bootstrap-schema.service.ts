import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Injectable()
export class SchemaBootstrapService implements OnApplicationBootstrap {
  constructor(
    private readonly dataSource: DataSource,
    private readonly dbConfig: ConfigService,
  ) {}

  async onApplicationBootstrap() {
    const schemas = this.dbConfig
      .getOrThrow<[String]>('SCHEMAS')
      .toString()
      .split(',');

    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }

    for (const schema of schemas) {
      await this.dataSource.query(`CREATE SCHEMA IF NOT EXISTS "${schema}";`);
    }
  }
}
