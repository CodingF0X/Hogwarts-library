import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ICreateUserAccountService } from '../ports';
import { UserAccountRepository } from '../../repository/user-account.repository';
import { CreateUserAccountDTO } from '../DTO/create-user.dto';
import { UserAccountDomain } from '../../domain/entities/user-account';
import { DomainMapper } from '../mappers/domain-mapper';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CreateAccountService implements ICreateUserAccountService {
  private readonly logger = new Logger(CreateAccountService.name);

  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async hashedPassword(password: string): Promise<string> {
    const password_hashed = await bcrypt.hash(password, 10);
    return password_hashed;
  }

  async create(userAccount: CreateUserAccountDTO): Promise<UserAccountDomain> {
    try {
      const newUserAccount =
        await this.userAccountRepository.create({
          ...userAccount,
          password: await this.hashedPassword(userAccount.password),
        });
      if (newUserAccount) this.logger.log('Account created successfully');

      return DomainMapper.toAccountDomain(newUserAccount);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
