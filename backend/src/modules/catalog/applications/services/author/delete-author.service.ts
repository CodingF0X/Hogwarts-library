import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IDeleteAuthorService } from '../../ports/author';
import { AuthorRepository } from 'src/modules/catalog/repository/author.repository';

@Injectable()
export class DeleteAuthorService implements IDeleteAuthorService {
  private readonly logger = new Logger(DeleteAuthorService.name);
  constructor(private readonly authorRepo: AuthorRepository) {}
  async deleteById(id: number): Promise<string> {
    try {
      const author = await this.authorRepo.findOneAndDelete({ id });
      return author;
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

 async deleteByName(lastName: string): Promise<string> {
    try {
      const author = await this.authorRepo.findOneAndDelete({ lastName });
      return author;
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

}
