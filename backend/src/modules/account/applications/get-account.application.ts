import { Inject, Injectable } from '@nestjs/common';
import {
  IGetUserAccountApplication,
  IGetUserAccountService,
} from '../interfaces';
import { Long } from 'typeorm';
import { UserAccountDomain } from '../domain/entities/user-account';
import { Token } from 'src/DI';

@Injectable()
export class GetUserAccountApplication implements IGetUserAccountApplication {
  constructor(
    @Inject(Token.SERVICES.GET_ACCOUNT)
    private readonly getAccountService: IGetUserAccountService,
  ) {}

  async getById(id: Long): Promise<UserAccountDomain> {
    return await this.getAccountService.getById(id);
  }
  async getByEmail(email: string): Promise<UserAccountDomain> {
    return await this.getAccountService.getByEmail(email);
  }
  async getAll(): Promise<UserAccountDomain[]> {
    return await this.getAccountService.getAll();
  }
}
