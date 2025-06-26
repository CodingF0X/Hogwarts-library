import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { AuthorDomain } from '../../../domain/entities/author.entity';
import { CreateAuthorDTO } from '../../DTO/author/create-author.dto';
import { AuthorRepository } from '../../../repository/author.repository';
import { ICreateAuthorService } from '../../ports/author';

@Injectable()
export class CreateAuthorService implements ICreateAuthorService {
  private readonly logger = new Logger(CreateAuthorService.name);
  constructor(private readonly authorRepo: AuthorRepository) {}
  async create(data: CreateAuthorDTO): Promise<AuthorDomain> {
    try {
      const author = await this.authorRepo.create(data);
      return author;
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
