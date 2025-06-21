import { forwardRef, Module } from '@nestjs/common';
import { UserAccountController } from './interfaces/controllers/user-account.controller';
import { UserAccountRepository } from './repository/user-account.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { UserAccountEntity } from './repository/entities/user-account.entity';
import { AccountsProviders } from 'src/modules/account/DI/account.providers';
import { ProfileModule } from '../profile/profile.module';
import { ProfileRepository } from '../profile/repository/profile.repository';

@Module({
  imports: [
    DatabaseModule.forFeature([UserAccountEntity]),
    forwardRef(() => ProfileModule),
  ],
  controllers: [UserAccountController],
  providers: [
    UserAccountRepository,
    ...AccountsProviders.all,
  ],
  exports: [],
})
export class AccountsModule {}
