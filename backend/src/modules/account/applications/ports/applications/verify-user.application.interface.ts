import { UserAccountDomain } from 'src/modules/account/domain/entities/user-account';

export interface IVerifyUserApplication {
  verifyUser(email: string, password: string): Promise<Omit<UserAccountDomain, 'password'>>;
}
