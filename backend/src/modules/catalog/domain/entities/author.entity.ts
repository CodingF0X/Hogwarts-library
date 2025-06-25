import { BadRequestException } from '@nestjs/common';
import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';

export class AuthorDomain extends AbstractEntity<AuthorDomain> {
  readonly firstName: string;
  readonly lastName: string;

  constructor(input: Partial<AuthorDomain>) {
    super(input);

    if (!input.firstName)
      throw new BadRequestException('First name is required');
    if (!input.lastName) throw new BadRequestException('Last name is required');

    this.firstName = input.firstName;
    this.lastName = input.lastName;
  }
}
