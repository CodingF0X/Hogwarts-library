import { AuthorDomain } from '../../domain/entities/author.entity';

export interface IGetAuthorService {
  getbyId(id: number): Promise<AuthorDomain>;
  getByLastName(lastName: string): Promise<AuthorDomain>;
  listAllAuthors(): Promise<AuthorDomain[]>;
}
