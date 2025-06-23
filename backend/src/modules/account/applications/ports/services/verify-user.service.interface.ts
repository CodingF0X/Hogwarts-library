import { UserAccountDomain } from 'src/modules/account/domain/entities/user-account';

export interface IVerifyUserService {
  verifyUser(email: string, password: string): Promise<UserAccountDomain>;
}
