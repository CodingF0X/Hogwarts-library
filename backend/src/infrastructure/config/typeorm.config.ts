import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Client } from 'pg';

export const typeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const dbConfig = configService.getOrThrow<{
    host: string;
    port: number;
    username: string;
    password: string;
    schemas: string[];
    database: string;
    type: 'postgres';
  }>('database');

  const pgClient = new Client({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    extra: dbConfig.schemas,
  });

  await pgClient.connect();

  for (const schema of dbConfig.schemas) {
    await pgClient.query(`CREATE SCHEMA IF NOT EXISTS "${schema}"`); 
  }
  await pgClient.end();

  return {
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,    
    password: dbConfig.password,
    database: dbConfig.database,
    extra: dbConfig.schemas,
    autoLoadEntities: true,
    migrationsRun: false,
    // // migrations: [join(__dirname, '../migrations/*{.js,.ts}')],
    // migrations: [SchemaMigration],
    synchronize: true,
    // entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  };
};
