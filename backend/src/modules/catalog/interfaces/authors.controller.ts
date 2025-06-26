import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AUTHOR_TOKEN } from '../DI/tokens/token.injection';
import { CreateAuthorDTO } from '../applications/DTO/author/create-author.dto';
import { AuthorDomain } from '../domain/entities/author.entity';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import {
  ICreateAuthorService,
  IDeleteAuthorService,
  IGetAuthorService,
  IUpdateAuthorService,
} from '../applications/ports/author';
import { UpdateAuthrorDTO } from '../applications/DTO/author/update-author.dto';

@Controller('authors')
export class AuthorsController {
  private readonly logger = new Logger(AuthorsController.name);
  constructor(
    @Inject(AUTHOR_TOKEN.SERVICES.CREATE)
    private readonly createAuthorSVC: ICreateAuthorService,

    @Inject(AUTHOR_TOKEN.SERVICES.GET)
    private readonly getAuthorSVC: IGetAuthorService,

    @Inject(AUTHOR_TOKEN.SERVICES.UPDATE)
    private readonly updateAuthorSVC: IUpdateAuthorService,

    @Inject(AUTHOR_TOKEN.SERVICES.DELETE)
    private readonly deleteAuthorSVC: IDeleteAuthorService,
  ) {}

  @Post()
  @Roles(User_Role.ADMIN)
  async createAuthor(@Body() data: CreateAuthorDTO): Promise<AuthorDomain> {
    return await this.createAuthorSVC.create(data).catch((error) => {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    });
  }

  @Get('/id/:id')
  @Roles(User_Role.ADMIN)
  async getAuthorById(@Param('id') id: number): Promise<AuthorDomain> {
    return await this.getAuthorSVC.getbyId(id).catch((err) => {
      this.logger.error(err.message);
      throw new BadRequestException(err.message);
    });
  }

  @Get('query')
  @Roles(User_Role.ADMIN)
  async getAuthorByName(
    @Query('name') lastName: string,
  ): Promise<AuthorDomain> {
    return await this.getAuthorSVC.getByLastName(lastName).catch((err) => {
      console.log(err);
      this.logger.error(err.message);
      throw new BadRequestException(err.message);
    });
  }

  @Get()
  @Roles(User_Role.ADMIN)
  async listAllAuthors(): Promise<AuthorDomain[]> {
    return await this.getAuthorSVC.listAllAuthors().catch((err) => {
      this.logger.error(err.message);
      throw new BadRequestException(err.message);
    });
  }

  @Patch('/:id')
  @Roles(User_Role.ADMIN)
  async updateAuthor(
    @Param('id') id: number,
    @Body() data: UpdateAuthrorDTO,
  ): Promise<AuthorDomain> {
    return await this.updateAuthorSVC.update(id, data).catch((err) => {
      this.logger.error(err.message);
      throw new BadRequestException(err.message);
    });
  }

  @Delete('id/:id')
  @Roles(User_Role.ADMIN)
  async deleteAuthor(@Param('id') id: number): Promise<string> {
    return await this.deleteAuthorSVC.deleteById(id);
  }

  @Delete('name/:name')
  @Roles(User_Role.ADMIN)
  async deleteAuthorByName(@Param('name') lastName: string): Promise<string> {
    return await this.deleteAuthorSVC.deleteByName(lastName);
  }
}
