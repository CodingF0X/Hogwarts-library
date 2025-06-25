import { Inject, Injectable } from '@nestjs/common';
import { IChangeRoleApplication } from './ports';
import { Token } from '../DI';
import { ChangeRoleService } from './services/change-role.service';
import { ChangeRoleDTO } from './DTO/change-role.dto';

@Injectable()
export class ChangeRoleApplication implements IChangeRoleApplication {
  constructor(
    @Inject(Token.SERVICES.CHANGE_ROLE)
    private readonly changeRoleService: ChangeRoleService,
  ) {}
  async changeRole(id: number, role: ChangeRoleDTO): Promise<string> {
    return await this.changeRoleService.changeRole(id, role);
  }
}
