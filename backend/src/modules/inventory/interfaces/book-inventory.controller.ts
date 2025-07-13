import { Body, Controller, Inject, Post } from '@nestjs/common';
import { INVENTORY_TOKENS } from '../DI/injection.tokens';
import { IAddBookCopiesService } from '../applications/ports/books/add-copies.service.interface';
import { BookCopy } from '../domain/entities/book-copy.domain';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import { InsertCopiesDTO } from '../applications/DTO/insert.copies.dto';

@Controller('inventory/books')
export class BooksInventoryController {
  constructor(
    @Inject(INVENTORY_TOKENS.SERVICES.INSERT_BOOK_COPIES)
    private readonly insertCopies: IAddBookCopiesService,
  ) {}

  @Post('insert')
  @Roles(User_Role.ADMIN)
  async getInventoryBooks(@Body() data: InsertCopiesDTO): Promise<BookCopy[]> {
    return await this.insertCopies.insertCopies(data.itemId, data.qty);
  }
}
