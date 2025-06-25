import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Logger,
  Post,
} from '@nestjs/common';
import { AUTHOR_TOKEN } from '../DI/tokens/token.injection';
import { ICreateAuthorService } from '../applications/ports';
import { CreateAuthorDTO } from '../applications/DTO/create-author.dto';
import { AuthorDomain } from '../domain/entities/author.entity';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';

@Controller('authors')
export class AuthorsController {
  private readonly logger = new Logger(AuthorsController.name);
  constructor(
    @Inject(AUTHOR_TOKEN.SERVICES.CREATE)
    private readonly createAuthorSVC: ICreateAuthorService,
  ) {}

  @Post()
  @Roles(User_Role.ADMIN)
  async createAuthor(@Body() data: CreateAuthorDTO): Promise<AuthorDomain> {
    return await this.createAuthorSVC.create(data).catch((error) => {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    });
  }
}
