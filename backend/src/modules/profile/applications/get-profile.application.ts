import { Inject, Injectable } from '@nestjs/common';
import { IGetProfileApplication, IGetProfileService } from './ports';
import { Long } from 'typeorm';
import { ProfileDomain } from '../domain/entities/profile.domain';
import { PROFILE_TOKEN } from '../DI';

@Injectable()
export class GetProfileApplication implements IGetProfileApplication {
  constructor(
    @Inject(PROFILE_TOKEN.SERVICES.GET_PROFILE)
    private readonly getProfileService: IGetProfileService,
  ) {}
  async getProfile(id: string): Promise<ProfileDomain> {
    return await this.getProfileService.getProfile(id);
  }
}
