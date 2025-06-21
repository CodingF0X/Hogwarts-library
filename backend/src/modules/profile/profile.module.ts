import { forwardRef, Module } from '@nestjs/common';
import { ProfileProviders } from './DI';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { ProfileEntity } from './repository/entities/profile.entity';
import { ProfileController } from './interfaces/profile.controller';
import { ProfileRepository } from './repository/profile.repository';
import { AccountsModule } from '../account/accounts.module';
import { CreateProfileService } from './applications/services/create-profile.service';

@Module({
  imports: [
    DatabaseModule.forFeature([ProfileEntity]),
    forwardRef(() => AccountsModule),
  ],
  controllers: [ProfileController],
  providers: [ProfileRepository, ...ProfileProviders.all, CreateProfileService],
  exports: [ ProfileProviders.createProfileApp],
})
export class ProfileModule {}
