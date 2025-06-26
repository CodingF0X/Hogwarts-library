import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IUpdateAuthorService } from '../ports/author';
import { AuthorDomain } from '../../domain/entities/author.entity';
import { UpdateAuthrorDTO } from '../DTO/update-author.dto';
import { AuthorRepository } from '../../repository/author.repository';
import { AuthorMapper } from '../mapper/author.mapper';

@Injectable()
export class UpdateAuthorService implements IUpdateAuthorService {
  private readonly logger = new Logger(UpdateAuthorService.name);

  constructor(private readonly authorRepo: AuthorRepository) {}

  async update(id: number, data: UpdateAuthrorDTO): Promise<AuthorDomain> {
    try {
      const author = await this.authorRepo.findOneAndUpdate({ id }, data);
      return AuthorMapper.toAuthorDomain(author);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
