import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SetQTYDTO {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  bookId: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  qty: number;
}
