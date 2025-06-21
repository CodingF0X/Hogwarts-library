import { Module } from '@nestjs/common';
import { ConfigModule } from './infrastructure/config/config.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { AccountsModule } from './modules/account/accounts.module';
import { ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [AccountsModule, ConfigModule, DatabaseModule, 
      LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        pinoHttp: {
          transport: {
            targets: [
              // // send logs to Loki
              // {
              //   target: 'pino-loki',
              //   options: {
              //     host: configService.getOrThrow<string>('LOKI_URL'),
              //     labels: { app: 'auth-service', env: 'development' },
              //     batching: true,
              //     interval: 5,
              //   },
              // },
              // keeping pretty-printing for local development
              {
                target: 'pino-pretty',
                options: { singleLine: true, autoLogging: false },
              },
            ],
          },
        },
      }),
    }), ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
