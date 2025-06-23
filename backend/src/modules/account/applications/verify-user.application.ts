import { Inject, Injectable } from '@nestjs/common';
import { IVerifyUserApplication, IVerifyUserService } from './ports';
import { UserAccountDomain } from '../domain/entities/user-account';
import { Token } from '../DI';

@Injectable()
export class VerifyUserApplication implements IVerifyUserApplication {
  constructor(
    @Inject(Token.SERVICES.LOGIN)
    private readonly verifyUserService: IVerifyUserService,
  ) {}
  async verifyUser(
    email: string,
    password: string,
  ): Promise<UserAccountDomain> {
    return await this.verifyUserService.verifyUser(email, password);
  }
}
