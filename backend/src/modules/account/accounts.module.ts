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
import { UpdateUserAccountApplication } from './applications/update-user.application';
import { UpdateUserAccountService } from './applications/services/update-account.service';

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

const updateAccountApp = {
  provide: Token.APPLICATIONS.UPDATE_ACCOUNT,
  useClass: UpdateUserAccountApplication
}

const updateAccountService = {
  provide: Token.SERVICES.UPDATE_ACCOUNT,
  useClass: UpdateUserAccountService
}
@Module({
  imports: [DatabaseModule.forFeature([UserAccountEntity])],
  controllers: [UserAccountController],
  providers: [
    UserAccountRepository,
    createAccountApp,
    createAccountService,
    getAccountApp,
    getAccountService,
    updateAccountApp,
    updateAccountService
  ],
  exports: [],
})
export class AccountsModule {}
