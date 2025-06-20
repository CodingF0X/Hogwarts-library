import { Token } from 'src/modules/account/DI';
import {
  CreateAccountService,
  DeleteAccountService,
  GetUserAccountService,
  UpdateUserAccountService,
} from '../applications/services';
import {
  CreateUserApplication,
  DeleteUserAccountApplication,
  GetUserAccountApplication,
  UpdateUserAccountApplication,
} from '../applications';

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

  static readonly DELETE_ACCOUNT_APP = {
    provide: Token.APPLICATIONS.DELETE_ACCOUNT,
    useClass: DeleteUserAccountApplication,
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

  static readonly DELETE_ACCOUNT_SVC = {
    provide: Token.SERVICES.DELETE_ACCOUNT,
    useClass: DeleteAccountService,
  };

  static readonly all = [
    AccountsProviders.CREATE_ACCOUNT_APP,
    AccountsProviders.CREATE_ACCOUNT_SVC,
    AccountsProviders.GET_ACCOUNT_APP,
    AccountsProviders.GET_ACCOUNT_SVC,
    AccountsProviders.UPDATE_ACCOUNT_APP,
    AccountsProviders.UPDATE_ACCOUNT_SVC,
    AccountsProviders.DELETE_ACCOUNT_APP,
    AccountsProviders.DELETE_ACCOUNT_SVC,
  ];
}
