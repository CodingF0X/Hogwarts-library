import { Inject, Injectable } from '@nestjs/common';
import { ProfileDomain } from '../domain/entities/profile.domain';
import { UpdateProfileDTO } from './DTO/update-profile.dto';
import { IUpdateProfileApplication, IUpdateProfileService } from './ports';
import { PROFILE_TOKEN } from '../DI/injection.token';
import { Long } from 'typeorm';

@Injectable()
export class UpdateProfileApplication implements IUpdateProfileApplication {
  constructor(
    @Inject(PROFILE_TOKEN.SERVICES.UPDATE_PROFILE)
    private readonly updateProfileService: IUpdateProfileService,
  ) {}

  async updateProfile(
    id: string,
    data: UpdateProfileDTO,
  ): Promise<ProfileDomain> {
    return await this.updateProfileService.updateProfile(id, data);
  }
}
