import { IsDefined, IsNotEmptyObject, IsNumber, IsString, ValidateNested } from 'class-validator';
import { IAddress } from '../../domain/value-objects/address.interface';
import { Type } from 'class-transformer';
import { AddressDTO } from './address.dto';

export class UpdateProfileDTO {
  @IsNumber()
  phone: number;

  @IsString()
  avatar: string;

  @IsString({ each: true })
  favourites: string[];

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  address: IAddress;
}
