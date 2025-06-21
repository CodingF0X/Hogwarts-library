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
import { ICreateProfileApplication } from 'src/modules/profile/applications/ports';
import { PROFILE_TOKEN } from 'src/modules/profile/DI';

@Injectable()
export class CreateAccountService implements ICreateUserAccountService {
  private readonly logger = new Logger(CreateAccountService.name);

  constructor(
    private readonly userAccountRepository: UserAccountRepository,
    @Inject(PROFILE_TOKEN.APPLICATIONS.CREATE_PROFILE)
    private readonly profileRepository: ICreateProfileApplication,
  ) {}

  async create(userAccount: CreateUserAccountDTO): Promise<UserAccountDomain> {
    try {
      const newUserAccount =
        await this.userAccountRepository.create(userAccount);

      await this.profileRepository.createProfile();
      if (newUserAccount) {
        this.logger.log('Account created successfully');
      }

      return DomainMapper.toAccountDomain(newUserAccount);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
