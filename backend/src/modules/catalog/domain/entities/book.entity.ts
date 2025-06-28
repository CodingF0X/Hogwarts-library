import { BadRequestException } from '@nestjs/common';

class BookDomain {
  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
  public readonly ISBN: string;
  public readonly category: string;
  public readonly publisher: string;
  public readonly publcation_date: Date;
  public readonly thumbnail_url: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(input: Partial<BookDomain>) {
    if (!input.id && typeof input.id !== 'number')
      throw new BadRequestException('Id must be a number');

    if (!input.title) throw new BadRequestException('Title is required');

    // if (!input.description)
    //   throw new BadRequestException('Description is required');

    if (!input.ISBN) throw new BadRequestException('ISBN is required');
    if (!input.category) throw new BadRequestException('Category is required');
    if (!input.publisher)
      throw new BadRequestException('Publisher is required');

    // if (!input.publcation_date)
    //   throw new BadRequestException('Publication date is required');
    // if (!input.thumbnail_url)
    //   throw new BadRequestException('Thumbnail url is required');

    if (!input.createdAt)
      throw new BadRequestException('Created at is required');
    if (!input.updatedAt)
      throw new BadRequestException('Updated at is required');
  }
}
