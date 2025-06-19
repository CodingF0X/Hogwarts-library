import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const dbConfig = configService.getOrThrow<{
    host: string;
    port: number;
    username: string;
    password: string;
    extra: {
      searchPath: string[];
    };
    database: string;
    type: 'postgres';
  }>('database');

  return {
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    extra: dbConfig.extra,
    autoLoadEntities: true,
    //migrationsRun: true,
    synchronize: true,
    // entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  };
};
