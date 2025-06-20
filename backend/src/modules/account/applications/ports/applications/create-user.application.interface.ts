import { UserAccountDomain } from "src/modules/account/domain/entities/user-account";
import { CreateUserAccountDTO } from "../../DTO/create-user.dto";

export interface ICreateUserAccountApplication {
    create(userAccount: CreateUserAccountDTO): Promise<UserAccountDomain>;
}