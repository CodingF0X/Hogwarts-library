import { Injectable } from '@nestjs/common';
import { AUTHOR_TOKEN } from '../tokens/token.injection';
import { CreateAuthorService } from '../../applications/services/create-author.service';

@Injectable()
export class AuthorProviders {

    
  static readonly CREATE_AUTHOR_SVC = {
    provide: AUTHOR_TOKEN.SERVICES.CREATE,
    useClass: CreateAuthorService,
  };

  static all = [AuthorProviders.CREATE_AUTHOR_SVC];
}
