import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { IVerifyUserService } from '../ports';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { UserAccountRepository } from '../../repository/user-account.repository';
import * as bcrypt from 'bcrypt';
import { DomainMapper } from '../mappers/domain-mapper';

@Injectable()
export class VerifyUserService implements IVerifyUserService {
  private readonly logger = new Logger(VerifyUserService.name);
  constructor(private readonly userAccountRepo: UserAccountRepository) {}

  async verifyUser(
    email: string,
    password: string,
  ): Promise<Omit<UserAccountDomain, 'password'>> {
    try {
      const account = await this.userAccountRepo.findOne({ email });
      const passwordValid = await bcrypt.compare(
        password,
        (await account).password,
      );

      if (!passwordValid) {
        this.logger.error('Invalid Credentials');
        throw new UnauthorizedException('Invalid Credentials');
      }

      this.logger.log('Successful login');
      const domainAccount = DomainMapper.toAccountDomain(account);
      const { password: _, ...userWithoutPassword } = domainAccount;

      return userWithoutPassword;
    } catch (error) {
      this.logger.error(error.message);
      throw new UnauthorizedException(error.message);
    }
  }
}
