import { UserAccountDomain } from 'src/modules/account/domain/entities/user-account';
import { UpdateUserAccountDTO } from '../../DTO/update-user.dto';

export interface IUpdateUserAccountService {
  update(
    userId: number,
    data: UpdateUserAccountDTO,
  ): Promise<UserAccountDomain>;
}
