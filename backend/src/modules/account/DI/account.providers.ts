import { Token } from 'src/modules/account/DI';
import { CreateUserApplication } from 'src/modules/account/applications/create-user.application';
import { GetUserAccountApplication } from 'src/modules/account/applications/get-account.application';
import { CreateAccountService } from 'src/modules/account/applications/services/create-account.service';
import { GetUserAccountService } from 'src/modules/account/applications/services/get-account.service';
import { UpdateUserAccountService } from 'src/modules/account/applications/services/update-account.service';
import { UpdateUserAccountApplication } from 'src/modules/account/applications/update-user.application';

export class AccountsProviders {
  // application layer
  static readonly CREATE_ACCOUNT_APP = {
    provide: Token.APPLICATIONS.CREATE_ACCOUNT,
    useClass: CreateUserApplication,
  };
  static readonly GET_ACCOUNT_APP = {
    provide: Token.APPLICATIONS.GET_ACCOUNT,
    useClass: GetUserAccountApplication,
  };
  static readonly UPDATE_ACCOUNT_APP = {
    provide: Token.APPLICATIONS.UPDATE_ACCOUNT,
    useClass: UpdateUserAccountApplication,
  };

  // service layer
  static readonly CREATE_ACCOUNT_SVC = {
    provide: Token.SERVICES.CREATE_ACCOUNT,
    useClass: CreateAccountService,
  };
  static readonly GET_ACCOUNT_SVC = {
    provide: Token.SERVICES.GET_ACCOUNT,
    useClass: GetUserAccountService,
  };
  static readonly UPDATE_ACCOUNT_SVC = {
    provide: Token.SERVICES.UPDATE_ACCOUNT,
    useClass: UpdateUserAccountService,
  };

  static readonly all = [
    AccountsProviders.CREATE_ACCOUNT_APP,
    AccountsProviders.CREATE_ACCOUNT_SVC,
    AccountsProviders.GET_ACCOUNT_APP,
    AccountsProviders.GET_ACCOUNT_SVC,
    AccountsProviders.UPDATE_ACCOUNT_APP,
    AccountsProviders.UPDATE_ACCOUNT_SVC,
  ];
}
