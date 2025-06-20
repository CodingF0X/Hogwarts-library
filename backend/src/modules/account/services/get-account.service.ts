import { Injectable } from '@nestjs/common';
import { IGetUserAccountService } from '../interfaces';
import { UserAccountDomain } from '../domain/entities/user-account';
import { UserAccountRepository } from '../repository/user-account.repository';
import { DomainMapper } from '../applications/mappers/domain-mapper';
import { Long } from 'typeorm';
import { UserAccountEntity } from '../repository/entities/user-account.entity';

@Injectable()
export class GetUserAccountService implements IGetUserAccountService {
  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async getById(userId: Long): Promise<UserAccountDomain> {
    try {
      const account = await this.userAccountRepository.findOneById({ userId });

      return DomainMapper.toAccountDomain(account);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getByEmail(email: string): Promise<UserAccountDomain> {
    try {
      const account = await this.userAccountRepository.findOne({ email });
      return DomainMapper.toAccountDomain(account);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAll(): Promise<UserAccountDomain[]> {
    try {
      const accounts: UserAccountEntity[] =
        await this.userAccountRepository.find({});

      return DomainMapper.toAccountDomainArray(accounts);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
