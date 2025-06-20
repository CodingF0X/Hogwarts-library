import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IUpdateUserAccountService } from '../ports';
import { Long } from 'typeorm';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { UpdateUserAccountDTO } from '../DTO/update-user.dto';
import { UserAccountRepository } from '../../repository/user-account.repository';
import { DomainMapper } from '../mappers/domain-mapper';

@Injectable()
export class UpdateUserAccountService implements IUpdateUserAccountService {
  private readonly logger = new Logger(UpdateUserAccountService.name);

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

      if (userAccount) {
        this.logger.log('Account found and updated');
      }
      return DomainMapper.toAccountDomain(userAccount);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(
        `Error updating user account: ${error.message}`,
      );
    }
  }
}
