import { CreateBookService } from '../../applications/services/book/create-book.service';
import { DeleteBookService } from '../../applications/services/book/delete-book.service';
import { GetBookService } from '../../applications/services/book/get-book.service';
import { UpdateBookService } from '../../applications/services/book/update-book.service';
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

  static readonly UPDATE_SVC = {
    provide: BOOK_TOKEN.SERVICES.UPDATE,
    useClass: UpdateBookService,
  };

  static readonly DELETE_SVC = {
    provide: BOOK_TOKEN.SERVICES.DELETE,
    useClass: DeleteBookService,
  };

  static all = [
    BookProviders.CREATE_SVC,
    BookProviders.GET_SVC,
    BookProviders.UPDATE_SVC,
    BookProviders.DELETE_SVC,
  ];
}
