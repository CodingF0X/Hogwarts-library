import { PickType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { BookDomain } from 'src/modules/catalog/domain/entities/book.entity';

export class GetBookDTO extends PickType(BookDomain, [
  'title',
  'ISBN',
  'publisher',
] as const) {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  ISBN: string;

  @IsOptional()
  @IsString()
  publisher: string;
}
