import { IsNotEmpty, IsNumber } from 'class-validator';

export class InsertCopiesDTO {
  @IsNumber()
  @IsNotEmpty()
  itemId: number;

  @IsNumber()
  @IsNotEmpty()
  qty: number;
}
