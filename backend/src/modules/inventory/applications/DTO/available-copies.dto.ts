import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { BookDTO } from './book/book.dto';
import { Type } from 'class-transformer';

export class AvailableBookSummaryDto {
  @ValidateNested()
  @Type(() => BookDTO)
  book!: BookDTO;

  @IsNumber()
  available!: number;

  @IsArray()
  @IsString({ each: true })
  copyIds!: string[];
}
