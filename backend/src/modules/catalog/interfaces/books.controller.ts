import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { BOOK_TOKEN } from '../DI/tokens/token.injection';
import { ICreateBookService } from '../applications/ports/book/create-book.service.interface';
import { CreateBookDTO } from '../applications/DTO/book/create-book.dto';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import { BookDomain } from '../domain/entities/book.entity';
import { BookResponse } from '../applications/DTO/book/book-response.dto';

@Controller('books')
export class BooksController {
  constructor(
    @Inject(BOOK_TOKEN.SERVICES.CREATE)
    private readonly createBookSVC: ICreateBookService,
  ) {}

  @Post()
  @Roles(User_Role.ADMIN)
  async createBook(@Body() data: CreateBookDTO): Promise<BookResponse> {
    return await this.createBookSVC.create(data).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }
}
