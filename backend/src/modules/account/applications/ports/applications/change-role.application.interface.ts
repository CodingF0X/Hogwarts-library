import { ChangeRoleDTO } from "../../DTO/change-role.dto";

export interface IChangeRoleApplication {
  changeRole(id: number, role: ChangeRoleDTO): Promise<string>;
}
