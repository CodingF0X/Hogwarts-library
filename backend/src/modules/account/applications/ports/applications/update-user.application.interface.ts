import { UserAccountDomain } from 'src/modules/account/domain/entities/user-account';
import { UpdateUserAccountDTO } from '../../DTO/update-user.dto';
import { Long } from 'typeorm';

export interface IUpdateUserAccountApplication {
  update(id: Long, data: UpdateUserAccountDTO): Promise<UserAccountDomain>;
}
