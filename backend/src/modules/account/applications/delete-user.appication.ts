import { Inject, Injectable } from '@nestjs/common';
import {
  IDeleteUserAccountApplication,
  IDeleteUserAccountService,
} from './ports';
import { Token } from '../DI';

@Injectable()
export class DeleteUserAccountApplication
  implements IDeleteUserAccountApplication
{
  constructor(
    @Inject(Token.SERVICES.DELETE_ACCOUNT)
    private readonly deleteUserAccountService: IDeleteUserAccountService,
  ) {}
  async delete(userId: number): Promise<string> {
    return await this.deleteUserAccountService.delete(userId);
  }
}
