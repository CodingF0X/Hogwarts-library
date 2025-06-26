import { AuthorDomain } from '../../domain/entities/author.entity';
import { AuthorEntity } from '../../repository/entities/author.entity';

export class AuthorMapper {
  public static toAuthorDomain(author: AuthorEntity): AuthorDomain {
    return new AuthorDomain(author);
  }

  public static toAuthorDomainList(authors: AuthorEntity[]): AuthorDomain[] {
    return authors.map((author) => new AuthorDomain(author));
  }
}
