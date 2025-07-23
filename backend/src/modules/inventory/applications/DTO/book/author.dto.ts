import { PickType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateAuthorDTO } from 'src/modules/catalog/applications/DTO/author/create-author.dto';

export class authorDTO extends PickType(CreateAuthorDTO, [
  'firstName',
  'lastName',
] as const) {
  @IsNumber()
  readonly id: number;
}
