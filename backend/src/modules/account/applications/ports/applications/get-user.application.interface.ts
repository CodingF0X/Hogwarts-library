import { UserAccountDomain } from "src/modules/account/domain/entities/user-account";

export interface IGetUserAccountApplication {
  getById(userId: string): Promise<UserAccountDomain>;
  getByEmail(email: string): Promise<UserAccountDomain>;
  getAll(): Promise<UserAccountDomain[]>;
}
