import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IChangeRoleService } from '../ports';
import { UserAccountRepository } from '../../repository/user-account.repository';
import { ChangeRoleDTO } from '../DTO/change-role.dto';

@Injectable()
export class ChangeRoleService implements IChangeRoleService {
    private readonly logger = new Logger(ChangeRoleService.name);
  constructor(private readonly userAccountRepo: UserAccountRepository) {}


   async changeRole(id: number, role: ChangeRoleDTO): Promise<string> {
        try {
            const user = await this.userAccountRepo.findOneAndUpdate({id},role)
            return `User with email ${user.email} has been promoted to ${user.role} .`
        } catch (error) {
            this.logger.error(error.message)
            throw new BadRequestException(error.message)
        }
    }

  
}
