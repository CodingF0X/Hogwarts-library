import { BadRequestException } from '@nestjs/common';
import { BookDomain } from 'src/modules/catalog/domain/entities/book.entity';

export class Inventory {
  public readonly id: number;
  public readonly book: BookDomain;
  public readonly quantity: string;

  constructor(input: Partial<Inventory>) {
    if (!input.id) throw new BadRequestException('Id required');
    if (!input.book) throw new BadRequestException('Book required');
    if (!input.quantity) throw new BadRequestException('Quantity reqired');

    this.id = input.id;
    this.book = input.book;
    this.quantity = input.quantity;
  }
}
