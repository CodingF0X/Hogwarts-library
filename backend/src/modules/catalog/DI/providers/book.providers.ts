import { CreateBookService } from '../../applications/services/book/create-book.service';
import { BOOK_TOKEN } from '../tokens/token.injection';

export class BookProviders {
  static readonly CREATE_SVC = {
    provide: BOOK_TOKEN.SERVICES.CREATE,
    useClass: CreateBookService,
  };

  static all = [BookProviders.CREATE_SVC];
}
