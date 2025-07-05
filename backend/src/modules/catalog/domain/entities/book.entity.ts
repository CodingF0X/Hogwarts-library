import { BadRequestException } from '@nestjs/common';
import { AuthorDomain } from './author.entity';

export class BookDomain {
  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
  public readonly ISBN: string;
  public readonly authors:AuthorDomain[]
  public readonly category: string;
  public readonly publisher: string;
  // public readonly publcation_date: Date;
  // public readonly thumbnail_url: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(input: Partial<BookDomain>) {
    if (!input.id && typeof input.id !== 'number')
      throw new BadRequestException('Id must be a number');
    this.id = input.id;

    if (!input.title) throw new BadRequestException('Title is required');
    this.title = input.title;
    
    if (!input.description)
      throw new BadRequestException('Description is required');
    this.description = input.description

    if (!input.ISBN) throw new BadRequestException('ISBN is required');
    this.ISBN = input.ISBN;


    if(!input.authors) throw new BadRequestException('Authors is required');
    this.authors = input.authors;

    if (!input.category) throw new BadRequestException('Category is required');
    this.category = input.category;

    if (!input.publisher)
      throw new BadRequestException('Publisher is required');
    this.publisher = input.publisher;

    // if (!input.publcation_date)
    //   throw new BadRequestException('Publication date is required');
    // this.publcation_date = input.publcation_date

    // if (!input.thumbnail_url)
    //   throw new BadRequestException('Thumbnail url is required');
    // this.thumbnail_url =  input.thumbnail_url

    if (!input.createdAt)
      throw new BadRequestException('Created at is required');
    this.createdAt = input.createdAt;

    if (!input.updatedAt)
      throw new BadRequestException('Updated at is required');
    this.updatedAt = input.updatedAt;
  }
}
