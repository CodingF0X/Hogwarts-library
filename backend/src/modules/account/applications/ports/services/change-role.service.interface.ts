import { ChangeRoleDTO } from '../../DTO/change-role.dto';

export interface IChangeRoleService {
  changeRole(id: number, role: ChangeRoleDTO): Promise<string>;
}
