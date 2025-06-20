import { UserAccountDomain } from "src/modules/account/domain/entities/user-account";
import { Long } from "typeorm";

export interface IGetUserAccountApplication {
  getById(id: Long): Promise<UserAccountDomain>;
  getByEmail(email: string): Promise<UserAccountDomain>;
  getAll(): Promise<UserAccountDomain[]>;
}
