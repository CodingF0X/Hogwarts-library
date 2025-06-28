import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  ISBN: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

  @IsDate()
  @IsOptional()
  publcation_date: Date;

  @IsString()
    @IsOptional()
  thumbnail_url: string;
}
