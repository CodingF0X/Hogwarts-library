import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AccountsModule } from '../account/accounts.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginService } from './applications/services/login.service';
import { AuthProviders } from './applications/DI';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule } from 'src/infrastructure/config';

@Module({
  imports: [
    AccountsModule,
    // ConfigModule
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: Number(configService.get<number>('JWT_EXPIRATION')),
        },
      }),
    }),
  ],
  providers: [LoginService, LocalStrategy, ...AuthProviders.all],
  controllers: [AuthController],
})
export class AuthModule {}
