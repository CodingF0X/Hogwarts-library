import { CreateBookService } from '../../applications/services/book/create-book.service';
import { GetBookService } from '../../applications/services/book/get-book.service';
import { BOOK_TOKEN } from '../tokens/token.injection';

export class BookProviders {
  static readonly CREATE_SVC = {
    provide: BOOK_TOKEN.SERVICES.CREATE,
    useClass: CreateBookService,
  };

  static readonly GET_SVC = {
    provide: BOOK_TOKEN.SERVICES.GET,
    useClass: GetBookService,
  };

  static all = [BookProviders.CREATE_SVC, BookProviders.GET_SVC];
}
