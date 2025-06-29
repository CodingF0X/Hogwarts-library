import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BOOK_TOKEN } from '../DI/tokens/token.injection';
import { ICreateBookService } from '../applications/ports/book/create-book.service.interface';
import { CreateBookDTO } from '../applications/DTO/book/create-book.dto';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import { BookDomain } from '../domain/entities/book.entity';
import { BookResponse } from '../applications/DTO/book/book-response.dto';
import { IGetBookService } from '../applications/ports/book/get-book.service.interface';
import { GetBookDTO } from '../applications/DTO/book/get-book.dto';
import { IUpdateBookService } from '../applications/ports/book/update-book.service.interface';
import { UpdateBookDTO } from '../applications/DTO/book/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(
    @Inject(BOOK_TOKEN.SERVICES.CREATE)
    private readonly createBookSVC: ICreateBookService,

    @Inject(BOOK_TOKEN.SERVICES.GET)
    private readonly getBookSVC: IGetBookService,

    @Inject(BOOK_TOKEN.SERVICES.UPDATE)
    private readonly updateBookSVC: IUpdateBookService,
  ) {}

  @Post()
  @Roles(User_Role.ADMIN)
  async createBook(@Body() data: CreateBookDTO): Promise<BookResponse> {
    return await this.createBookSVC.create(data).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Get('find')
  @Roles(User_Role.ADMIN)
  async getBooks(): Promise<BookResponse[]> {
    return await this.getBookSVC.getAll().catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Get('find/id/:id')
  @Roles(User_Role.ADMIN)
  async getBook(@Param('id') id: number): Promise<BookResponse> {
    return await this.getBookSVC.getById(id).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Get('find/query')
  @Roles(User_Role.ADMIN)
  async getBookByQuery(@Query() data: GetBookDTO): Promise<BookResponse> {
    return await this.getBookSVC.getBy(data).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Patch('patch/:id')
  @Roles(User_Role.ADMIN)
  async updateBook(
    @Param('id') id: number,
    @Body() data: UpdateBookDTO,
  ): Promise<BookResponse> {
    return await this.updateBookSVC.update(id, data).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }
}
