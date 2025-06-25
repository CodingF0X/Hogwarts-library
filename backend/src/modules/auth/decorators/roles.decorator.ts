import { SetMetadata } from "@nestjs/common";
import { User_Role } from "src/modules/auth/roles.enum";

export const ROLES_KEY = 'roles';
export const Roles = (...roles: User_Role[]) => SetMetadata(ROLES_KEY, roles);