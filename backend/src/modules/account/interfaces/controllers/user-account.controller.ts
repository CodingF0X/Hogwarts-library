import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Token } from 'src/DI';
import {
  ICreateUserAccountApplication,
  IGetUserAccountApplication,
} from '../../applications/ports';
import { CreateUserAccountDTO } from '../../applications/DTO/create-user.dto';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { Long } from 'typeorm';

@Controller('/accounts')
export class UserAccountController {
  constructor(
    @Inject(Token.APPLICATIONS.CREATE_ACCOUNT)
    private readonly createAccount: ICreateUserAccountApplication,

    @Inject(Token.APPLICATIONS.GET_ACCOUNT)
    private readonly getAccount: IGetUserAccountApplication,
  ) {}

  @Post()
  async create(
    @Body() userAccount: CreateUserAccountDTO,
  ): Promise<UserAccountDomain> {
    return await this.createAccount.create(userAccount);
  }

  @Get()
  async getAll(): Promise<UserAccountDomain[]> {
    return await this.getAccount.getAll();
  }

  @Get('/id/:id')
  async getOne(@Param('id') id: Long): Promise<UserAccountDomain> {
    return await this.getAccount.getById(id);
  }

  @Get('/email/:email')
  async getByEmail(@Param('email') email: string): Promise<UserAccountDomain> {
    return await this.getAccount.getByEmail(email);
  }
}
