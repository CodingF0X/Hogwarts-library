import { Injectable } from '@nestjs/common';
import { ICreateUserAccountService } from '../interfaces';
import { UserAccountRepository } from '../repository/user-account.repository';
import { CreateUserAccountDTO } from '../applications/DTO/create-user.dto';
import { UserAccountDomain } from '../domain/entities/user-account';
import { DomainMapper } from '../applications/mappers/domain-mapper';

@Injectable()
export class CreateAccountService implements ICreateUserAccountService {
  constructor(private readonly userAccountRepository: UserAccountRepository) {}

  async create(userAccount: CreateUserAccountDTO): Promise<UserAccountDomain> {
    try {
      const newUserAccount =
        await this.userAccountRepository.create(userAccount);

      return DomainMapper.toAccountDomain(newUserAccount);
    } catch (error) {
        throw new Error(error);
    }
  }
}
