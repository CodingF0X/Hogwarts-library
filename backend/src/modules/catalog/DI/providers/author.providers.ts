import { Injectable } from '@nestjs/common';
import { AUTHOR_TOKEN } from '../tokens/token.injection';
import { CreateAuthorService } from '../../applications/services/author/create-author.service';
import { GetAuthorService } from '../../applications/services/author/get-author.service';
import { UpdateAuthorService } from '../../applications/services/author/update-author.service';

@Injectable()
export class AuthorProviders {
  static readonly CREATE_AUTHOR_SVC = {
    provide: AUTHOR_TOKEN.SERVICES.CREATE,
    useClass: CreateAuthorService,
  };

  static readonly GET_AUTHOR_SVC = {
    provide: AUTHOR_TOKEN.SERVICES.GET,
    useClass: GetAuthorService,
  };

  static readonly UPDATE_AUTHOR_SVC = {
    provide: AUTHOR_TOKEN.SERVICES.UPDATE,
    useClass: UpdateAuthorService,
  };

  static all = [
    AuthorProviders.CREATE_AUTHOR_SVC,
    AuthorProviders.GET_AUTHOR_SVC,
    AuthorProviders.UPDATE_AUTHOR_SVC,
  ];
}
