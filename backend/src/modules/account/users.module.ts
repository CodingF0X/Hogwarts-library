import { Module } from '@nestjs/common';
import { UserAccountController } from './controllers/user-account.controller';
import { Token } from 'src/DI';
import { CreateUserApplication } from './applications/create-user.application';
import { CreateAccountService } from './services/create-account.service';
import { UserAccountRepository } from './repository/user-account.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { UserAccountEntity } from './repository/entities/user-account.entity';

const createAccountApp = {
  provide: Token.APPLICATIONS.CREATE_ACCOUNT,
  useClass: CreateUserApplication,
};

const createAccountService = {
  provide: Token.SERVICES.CREATE_ACCOUNT,
  useClass: CreateAccountService, 
};
@Module({
  imports: [DatabaseModule.forFeature([UserAccountEntity])],
  controllers: [UserAccountController],
  providers: [createAccountApp, createAccountService, UserAccountRepository],
  exports: [],
})
export class UsersModule {}
