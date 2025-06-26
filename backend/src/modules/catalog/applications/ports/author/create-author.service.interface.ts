import { AuthorDomain } from '../../../domain/entities/author.entity';
import { CreateAuthorDTO } from '../../DTO/author/create-author.dto';

export interface ICreateAuthorService {
  create(data: CreateAuthorDTO): Promise<AuthorDomain>;
}
