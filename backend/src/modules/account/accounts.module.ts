import { Module } from '@nestjs/common';
import { UserAccountController } from './interfaces/controllers/user-account.controller';
import { Token } from 'src/DI';
import { CreateUserApplication } from './applications/create-user.application';
import { CreateAccountService } from './applications/services/create-account.service';
import { UserAccountRepository } from './repository/user-account.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { UserAccountEntity } from './repository/entities/user-account.entity';
import { GetUserAccountService } from './applications/services/get-account.service';
import { GetUserAccountApplication } from './applications/get-account.application';

const createAccountApp = {
  provide: Token.APPLICATIONS.CREATE_ACCOUNT,
  useClass: CreateUserApplication,
};

const createAccountService = {
  provide: Token.SERVICES.CREATE_ACCOUNT,
  useClass: CreateAccountService,
};

const getAccountApp = {
  provide: Token.APPLICATIONS.GET_ACCOUNT,
  useClass: GetUserAccountApplication,
};

const getAccountService = {
  provide: Token.SERVICES.GET_ACCOUNT,
  useClass: GetUserAccountService,
};
@Module({
  imports: [DatabaseModule.forFeature([UserAccountEntity])],
  controllers: [UserAccountController],
  providers: [
    UserAccountRepository,
    createAccountApp,
    createAccountService,
    getAccountApp,
    getAccountService,
  ],
  exports: [],
})
export class AccountsModule {}
