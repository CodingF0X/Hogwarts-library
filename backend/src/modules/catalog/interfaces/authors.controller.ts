import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AUTHOR_TOKEN } from '../DI/tokens/token.injection';
import { CreateAuthorDTO } from '../applications/DTO/create-author.dto';
import { AuthorDomain } from '../domain/entities/author.entity';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import {
  ICreateAuthorService,
  IGetAuthorService,
} from '../applications/ports/author';

@Controller('authors')
export class AuthorsController {
  private readonly logger = new Logger(AuthorsController.name);
  constructor(
    @Inject(AUTHOR_TOKEN.SERVICES.CREATE)
    private readonly createAuthorSVC: ICreateAuthorService,

    @Inject(AUTHOR_TOKEN.SERVICES.GET)
    private readonly getAuthorSVC: IGetAuthorService,
  ) {}

  @Post()
  @Roles(User_Role.ADMIN)
  async createAuthor(@Body() data: CreateAuthorDTO): Promise<AuthorDomain> {
    return await this.createAuthorSVC.create(data).catch((error) => {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    });
  }

  @Get('/:id')
  @Roles(User_Role.ADMIN)
  async getAuthorById(@Param('id') id: number): Promise<AuthorDomain> {
    return await this.getAuthorSVC.getbyId(id).catch((err) => {
      this.logger.error(err.message);
      throw new BadRequestException(err.message);
    });
  }

  @Get()
  @Roles(User_Role.ADMIN)
  async getAuthorByEmail(
    @Query('lastName') lastName: string,
  ): Promise<AuthorDomain> {
    return await this.getAuthorSVC.getByLastName(lastName).catch((err) => {
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
}
