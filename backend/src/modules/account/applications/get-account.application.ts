import { Inject, Injectable } from '@nestjs/common';
import {
  IGetUserAccountApplication,
  IGetUserAccountService,
} from './ports';
import { Long } from 'typeorm';
import { UserAccountDomain } from '../domain/entities/user-account';
import { Token } from 'src/modules/account/DI';

@Injectable()
export class GetUserAccountApplication implements IGetUserAccountApplication {
  constructor(
    @Inject(Token.SERVICES.GET_ACCOUNT)
    private readonly getAccountService: IGetUserAccountService,
  ) {}

  async getById(userId: number): Promise<UserAccountDomain> {
    return await this.getAccountService.getById(userId);
  }
  async getByEmail(email: string): Promise<UserAccountDomain> {
    return await this.getAccountService.getByEmail(email);
  }
  async getAll(): Promise<UserAccountDomain[]> {
    return await this.getAccountService.getAll();
  }
}
