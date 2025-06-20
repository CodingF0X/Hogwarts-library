import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Token } from 'src/modules/account/DI';
import {
  ICreateUserAccountApplication,
  IDeleteUserAccountApplication,
  IGetUserAccountApplication,
  IUpdateUserAccountApplication,
} from '../../applications/ports';
import { CreateUserAccountDTO } from '../../applications/DTO/create-user.dto';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { Long } from 'typeorm';
import { UpdateUserAccountDTO } from '../../applications/DTO/update-user.dto';

@Controller('/accounts')
export class UserAccountController {
  constructor(
    @Inject(Token.APPLICATIONS.CREATE_ACCOUNT)
    private readonly createAccount: ICreateUserAccountApplication,

    @Inject(Token.APPLICATIONS.GET_ACCOUNT)
    private readonly getAccount: IGetUserAccountApplication,

    @Inject(Token.APPLICATIONS.UPDATE_ACCOUNT)
    private readonly updateAccount: IUpdateUserAccountApplication,

    @Inject(Token.APPLICATIONS.DELETE_ACCOUNT)
    private readonly deleteAccount: IDeleteUserAccountApplication,
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

  @Patch('/:id')
  async update(
    @Body() userAccount: UpdateUserAccountDTO,
    @Param('id') id: Long,
  ): Promise<UserAccountDomain> {
    return await this.updateAccount.update(id, userAccount);
  }

  @Delete('/:id')
  async delete(@Param('id') id: Long): Promise<string> {
    return await this.deleteAccount.delete(id);
  }
}
