import { UserAccountDomain } from '../../../domain/entities/user-account';

export interface IGetUserAccountService {
  getById(userId: string): Promise<UserAccountDomain>;
  getByEmail(email: string): Promise<UserAccountDomain>;
  getAll(): Promise<UserAccountDomain[]>;
}
