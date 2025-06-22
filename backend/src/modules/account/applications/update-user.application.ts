import { Inject, Injectable } from '@nestjs/common';
import {
  IUpdateUserAccountApplication,
  IUpdateUserAccountService,
} from './ports';
import { Long } from 'typeorm';
import { UserAccountDomain } from '../domain/entities/user-account';
import { UpdateUserAccountDTO } from './DTO/update-user.dto';
import { Token } from 'src/modules/account/DI';

@Injectable()
export class UpdateUserAccountApplication
  implements IUpdateUserAccountApplication
{
  constructor(
    @Inject(Token.SERVICES.UPDATE_ACCOUNT)
    private readonly updateAccountService: IUpdateUserAccountService,
  ) {}

  async update(
    userId: number,
    data: UpdateUserAccountDTO,
  ): Promise<UserAccountDomain> {
    return await this.updateAccountService.update(userId, data);
  }
}
