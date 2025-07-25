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
  IChangeRoleService,
  ICreateUserAccountService,
  IDeleteUserAccountService,
  IGetUserAccountService,
  IUpdateUserAccountService,
} from '../../applications/ports';
import { CreateUserAccountDTO } from '../../applications/DTO/create-user.dto';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { UpdateUserAccountDTO } from '../../applications/DTO/update-user.dto';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import { ChangeRoleDTO } from '../../applications/DTO/change-role.dto';

@Controller('/accounts')
export class UserAccountController {
  constructor(
    @Inject(Token.SERVICES.CREATE_ACCOUNT)
    private readonly createAccount: ICreateUserAccountService,

    @Inject(Token.SERVICES.GET_ACCOUNT)
    private readonly getAccount: IGetUserAccountService,

    @Inject(Token.SERVICES.UPDATE_ACCOUNT)
    private readonly updateAccount: IUpdateUserAccountService,

    @Inject(Token.SERVICES.DELETE_ACCOUNT)
    private readonly deleteAccount: IDeleteUserAccountService,

    @Inject(Token.SERVICES.CHANGE_ROLE)
    private readonly changeRoleApp: IChangeRoleService,
  ) {}

  @Public()
  @Post()
  async create(
    @Body() userAccount: CreateUserAccountDTO,
  ): Promise<UserAccountDomain> {
    return await this.createAccount.create(userAccount);
  }

  @Get()
  @Roles(User_Role.ADMIN)
  async getAll(): Promise<UserAccountDomain[]> {
    return await this.getAccount.getAll();
  }

  @Get('/id/:id')
  @Roles(User_Role.ADMIN)
  async getOne(@Param('id') id: number): Promise<UserAccountDomain> {
    return await this.getAccount.getById(id);
  }

  @Get('/email/:email')
  @Roles(User_Role.ADMIN)
  async getByEmail(@Param('email') email: string): Promise<UserAccountDomain> {
    return await this.getAccount.getByEmail(email);
  }

  @Patch('/:id')
  async update(
    @Body() userAccount: UpdateUserAccountDTO,
    @Param('id') id: number,
  ): Promise<UserAccountDomain> {
    return await this.updateAccount.update(id, userAccount);
  }

  @Delete('/:id')
  @Roles(User_Role.ADMIN)
  async delete(@Param('id') id: number): Promise<string> {
    return await this.deleteAccount.delete(id);
  }

  @Patch('/:id/role')
  @Roles(User_Role.ADMIN)
  async changeRole(
    @Param('id') id: number,
    @Body() role: ChangeRoleDTO,
  ): Promise<string> {
    return await this.changeRoleApp.changeRole(id, role);
  }
}
