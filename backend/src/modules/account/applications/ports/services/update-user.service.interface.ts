import { UserAccountDomain } from 'src/modules/account/domain/entities/user-account';
import { UpdateUserAccountDTO } from '../../DTO/update-user.dto';
import { Long } from 'typeorm';

export interface IUpdateUserAccountService {
  update(id: Long, data: UpdateUserAccountDTO): Promise<UserAccountDomain>;
}
