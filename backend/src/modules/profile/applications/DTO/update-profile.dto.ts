import { IsNumber, IsString } from 'class-validator';

export class UpdateProfileDTO {
  @IsNumber()
  phone: number;

  @IsString()
  avatar: string;

  @IsString({ each: true })
  favourites: string[];

  @IsString()
  address: string;
}
