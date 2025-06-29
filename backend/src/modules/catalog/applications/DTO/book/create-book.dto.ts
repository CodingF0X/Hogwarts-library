import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  ISBN: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  readonly authorIds!: number[];

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

  @IsDate()
  @IsOptional()
  publication_date: Date;

  @IsString()
  @IsOptional()
  thumbnail_url: string;
}
