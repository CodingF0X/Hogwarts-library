import { Body, Controller, Get, Inject, Param, Patch } from '@nestjs/common';
import { PROFILE_TOKEN } from '../DI/injection.token';
import {
  IGetProfileApplication,
  IUpdateProfileApplication,
} from '../applications/ports';
import { UpdateProfileDTO } from '../applications/DTO/update-profile.dto';
import { ProfileDomain } from '../domain/entities/profile.domain';

@Controller('/profile')
export class ProfileController {
  constructor(
    @Inject(PROFILE_TOKEN.APPLICATIONS.UPDATE_PROFILE)
    private readonly updateProfileApp: IUpdateProfileApplication,

    @Inject(PROFILE_TOKEN.APPLICATIONS.GET_PROFILE)
    private readonly getProfileApp: IGetProfileApplication,
  ) {}

  @Get('/:id')
  async getProfile(@Param('id') id: number): Promise<ProfileDomain> {
    return await this.getProfileApp.getProfile(id);
  }

  @Patch('/:id')
  async updateProfile(
    @Param('id') id: number,
    @Body() data: UpdateProfileDTO,
  ): Promise<ProfileDomain> {
    return await this.updateProfileApp.updateProfile(id, data);
  }
}
