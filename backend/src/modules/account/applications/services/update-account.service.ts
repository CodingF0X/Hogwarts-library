import { Injectable } from '@nestjs/common';
import { IUpdateUserAccountService } from '../ports';
import { Long } from 'typeorm';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { UpdateUserAccountDTO } from '../DTO/update-user.dto';
import { UserAccountRepository } from '../../repository/user-account.repository';
import { DomainMapper } from '../mappers/domain-mapper';

@Injectable()
export class UpdateUserAccountService implements IUpdateUserAccountService {
  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async update(
    userId: Long,
    data: UpdateUserAccountDTO,
  ): Promise<UserAccountDomain> {
    try {
      const userAccount = await this.userAccountRepository.findOneAndUpdate(
        { userId },
        data,
      );

      return DomainMapper.toAccountDomain(userAccount);
    } catch (error) {
      throw new Error(`Error updating user account: ${error.message}`);
    }
  }
}
