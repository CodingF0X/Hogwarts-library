import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { User_Role } from "src/modules/auth/roles.enum";

export class ChangeRoleDTO {
    @IsEnum(User_Role)
    @IsNotEmpty()
    role: string
}