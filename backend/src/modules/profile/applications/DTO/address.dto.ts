// address.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddressDTO {
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsNumber()
  house_No: number;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsNumber()
  zipCode: number;

  @IsNotEmpty()
  @IsString()
  country: string;
}
