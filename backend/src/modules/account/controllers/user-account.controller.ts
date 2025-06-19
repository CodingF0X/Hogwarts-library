import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Token } from 'src/DI';
import { ICreateUserAccountApplication } from '../interfaces';
import { CreateUserAccountDTO } from '../applications/DTO/create-user.dto';
import { UserAccountDomain } from '../domain/entities/user-account';

@Controller('/accounts')
export class UserAccountController {
  constructor(
    @Inject(Token.APPLICATIONS.CREATE_ACCOUNT)
    private readonly createAccount: ICreateUserAccountApplication,
  ) {}

  @Post()
  async create(
    @Body() userAccount: CreateUserAccountDTO,
  ): Promise<UserAccountDomain> {
    return await this.createAccount.create(userAccount);
  }
}
