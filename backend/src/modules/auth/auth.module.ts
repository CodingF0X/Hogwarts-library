import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AccountsModule } from '../account/accounts.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginService } from './applications/services/login.service';
import { AuthProviders } from './applications/DI';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule } from 'src/infrastructure/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Global()
@Module({
  imports: [
    AccountsModule,
    // ConfigModule

    PassportModule.register({ session: true }),

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
  providers: [LoginService, LocalStrategy, JwtStrategy, ...AuthProviders.all],
  controllers: [AuthController],
})
export class AuthModule {}
