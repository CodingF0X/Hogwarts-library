import { BadRequestException, Injectable } from '@nestjs/common';
import { IDeleteUserAccountService } from '../ports';
import { UserAccountRepository } from '../../repository/user-account.repository';
import { Long } from 'typeorm';

@Injectable()
export class DeleteAccountService implements IDeleteUserAccountService {
  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async delete(userId: Long): Promise<string> {
    try {
      return await this.userAccountRepository.findOneAndDelete({ userId });
    } catch (error) {
      throw new BadRequestException(`Error deleting user: ${error.message}`);
    }
  }
}
