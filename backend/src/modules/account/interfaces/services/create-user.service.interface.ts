import { CreateUserAccountDTO } from '../../applications/DTO/create-user.dto';
import { UserAccountDomain } from '../../domain/entities/user-account';

export interface ICreateUserAccountService {
  create(userAccount: CreateUserAccountDTO): Promise<UserAccountDomain>;
}
