import { Inject, Injectable } from '@nestjs/common';
import {
  ICreateUserAccountApplication,
  ICreateUserAccountService,
} from './ports';
import { Token } from 'src/modules/account/DI';
import { UserAccountDomain } from '../domain/entities/user-account';
import { CreateUserAccountDTO } from './DTO/create-user.dto';

@Injectable()
export class CreateUserApplication implements ICreateUserAccountApplication {
  constructor(
    @Inject(Token.SERVICES.CREATE_ACCOUNT)
    private readonly createUserService: ICreateUserAccountService,
  ) {}

  async create(userAccount: CreateUserAccountDTO): Promise<UserAccountDomain> {
    return await this.createUserService.create(userAccount);
  }
}
