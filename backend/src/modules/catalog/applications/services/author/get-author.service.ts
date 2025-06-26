import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { AuthorDomain } from '../../../domain/entities/author.entity';
import { AuthorRepository } from '../../../repository/author.repository';
import { AuthorMapper } from '../../mapper/author.mapper';
import { IGetAuthorService } from '../../ports/author';

@Injectable()
export class GetAuthorService implements IGetAuthorService {
  private readonly logger = new Logger(GetAuthorService.name);
  constructor(private readonly authorRepo: AuthorRepository) {}

  async getbyId(id: number): Promise<AuthorDomain> {
    try {
      const author = await this.authorRepo.findOneById({ id });
      if (!author) {
        throw new NotFoundException('Author not found');
      }
      return AuthorMapper.toAuthorDomain(author);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
  async getByLastName(lastName: string): Promise<AuthorDomain> {
    try {
      const author = await this.authorRepo.findOne({ lastName });

      if (!author) {
        throw new NotFoundException('Author not found');
      }
      return AuthorMapper.toAuthorDomain(author);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
  async listAllAuthors(): Promise<AuthorDomain[]> {
    try {
      const authors = await this.authorRepo.find({});
      if (!authors) {
        throw new NotFoundException('Authors not found');
      }
      return AuthorMapper.toAuthorDomainList(authors);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
