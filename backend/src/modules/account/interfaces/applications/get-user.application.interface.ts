import { Long } from "typeorm";
import { UserAccountDomain } from "../../domain/entities/user-account";

export interface IGetUserAccountApplication {
  getById(id: Long): Promise<UserAccountDomain>;
  getByEmail(email: string): Promise<UserAccountDomain>;
  getAll(): Promise<UserAccountDomain[]>;
}
