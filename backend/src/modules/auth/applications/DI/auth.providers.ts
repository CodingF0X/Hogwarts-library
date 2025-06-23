import { LoginService } from '../services/login.service';
import { TOKEN } from './tokens';

export class AuthProviders {
  static readonly login_SVC = {
    provide: TOKEN.SERVICS.LOGIN,
    useClass: LoginService,
  };

  static readonly all = [this.login_SVC];
}
