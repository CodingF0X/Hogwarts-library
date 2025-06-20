import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IDeleteUserAccountService } from '../ports';
import { UserAccountRepository } from '../../repository/user-account.repository';
import { Long } from 'typeorm';

@Injectable()
export class DeleteAccountService implements IDeleteUserAccountService {
  private readonly logger = new Logger(DeleteAccountService.name);

  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async delete(userId: Long): Promise<string> {
    try {
      const account = await this.userAccountRepository.findOneAndDelete({
        userId,
      });
      if (account) {
        this.logger.log('Account Deleted');
      }
      return account;
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(`Error deleting user: ${error.message}`);
    }
  }
}
