import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserAccountDTO {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
