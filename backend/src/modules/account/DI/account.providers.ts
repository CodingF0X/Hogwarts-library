import { Token } from 'src/modules/account/DI';
import {
  CreateAccountService,
  DeleteAccountService,
  GetUserAccountService,
  UpdateUserAccountService,
} from '../applications/services';
import { VerifyUserService } from '../applications/services/verify-user.service';
import { ChangeRoleService } from '../applications/services/change-role.service';

export class AccountsProviders {
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

  static readonly LOGIN_SVC = {
    provide: Token.SERVICES.LOGIN,
    useClass: VerifyUserService,
  };

  static readonly CHANGE_ROLE_SVC = {
    provide: Token.SERVICES.CHANGE_ROLE,
    useClass: ChangeRoleService,
  };

  static readonly all = [
    AccountsProviders.CREATE_ACCOUNT_SVC,
    AccountsProviders.GET_ACCOUNT_SVC,
    AccountsProviders.UPDATE_ACCOUNT_SVC,
    AccountsProviders.DELETE_ACCOUNT_SVC,
    AccountsProviders.LOGIN_SVC,
    AccountsProviders.CHANGE_ROLE_SVC,
  ];
}
