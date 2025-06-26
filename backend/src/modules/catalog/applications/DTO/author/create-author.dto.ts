import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAuthorDTO {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  lastName: string;
}
