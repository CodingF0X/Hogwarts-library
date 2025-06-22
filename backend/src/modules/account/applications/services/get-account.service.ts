import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { IGetUserAccountService } from '../ports';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { UserAccountRepository } from '../../repository/user-account.repository';
import { DomainMapper } from '../mappers/domain-mapper';
import { UserAccountEntity } from '../../repository/entities/user-account.entity';

@Injectable()
export class GetUserAccountService implements IGetUserAccountService {
  private readonly logger = new Logger(GetUserAccountService.name);

  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async getById(userId: number): Promise<UserAccountDomain> {
    try {
      const account = await this.userAccountRepository.findOneById({ userId });

      if (account) {
        this.logger.log('Account found');
      }

      return DomainMapper.toAccountDomain(account);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async getByEmail(email: string): Promise<UserAccountDomain> {
    try {
      const account = await this.userAccountRepository.findOne({ email });

      if (account) {
        this.logger.log('Account found');
      }
      return DomainMapper.toAccountDomain(account);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async getAll(): Promise<UserAccountDomain[]> {
    try {
      const accounts: UserAccountEntity[] =
        await this.userAccountRepository.find({});

      if (accounts) {
        this.logger.log('Accounts found');
      }

      return DomainMapper.toAccountDomainArray(accounts);
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
  }
}
