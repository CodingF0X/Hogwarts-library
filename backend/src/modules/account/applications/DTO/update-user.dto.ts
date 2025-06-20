import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAccountDTO } from './create-user.dto';

export class UpdateUserAccountDTO extends PartialType(CreateUserAccountDTO) {}
