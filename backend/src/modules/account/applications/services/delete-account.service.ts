import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IDeleteUserAccountService } from '../ports';
import { UserAccountRepository } from '../../repository/user-account.repository';

@Injectable()
export class DeleteAccountService implements IDeleteUserAccountService {
  private readonly logger = new Logger(DeleteAccountService.name);

  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async delete(id: string): Promise<string> {
    try {
      const account = await this.userAccountRepository.findOneAndDelete({
        id,
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
