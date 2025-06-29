import { Inject, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Token } from 'src/modules/account/DI';
import { User } from '../applications/ports/jwt/user.interface';
import { IVerifyUserService } from 'src/modules/account/applications/ports';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);
  constructor(
    @Inject(Token.SERVICES.LOGIN)
    private readonly verifyUserApp: IVerifyUserService,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    });
  }

  async validate(email: string, password: string): Promise<User> {
    try {
      const user = await this.verifyUserApp.verifyUser(email, password);
      return {
        ...user,
        email: user.email.toJSON(),
      };
    } catch (error) {}
    this.logger.warn(this.error)
    throw new UnauthorizedException('Invalid Credentials - Access Denied');
  }
}
