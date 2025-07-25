import { AuthorDomain } from 'src/modules/catalog/domain/entities/author.entity';
import { UpdateAuthrorDTO } from '../../DTO/author/update-author.dto';

export interface IUpdateAuthorService {
  update(id: number, data: UpdateAuthrorDTO): Promise<AuthorDomain>;
}
