import { LoginService } from '../services/login.service';
import { LogoutService } from '../services/logout.service';
import { TOKEN } from './tokens';

export class AuthProviders {
  static readonly login_SVC = {
    provide: TOKEN.SERVICS.LOGIN,
    useClass: LoginService,
  };

  static readonly logout_SVC = {
    provide: TOKEN.SERVICS.LOGOUT,
    useClass: LogoutService,
  };

  static readonly all = [this.login_SVC, this.logout_SVC];
}
