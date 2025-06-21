import { Controller, Get, Inject, Param, Patch } from '@nestjs/common';
import { PROFILE_TOKEN } from '../DI/injection.token';
import {
  IGetProfileApplication,
  IUpdateProfileApplication,
} from '../applications/ports';
import { Long } from 'typeorm';
import { UpdateProfileDTO } from '../applications/DTO/update-profile.dto';

@Controller('/profile')
export class ProfileController {
  constructor(
    @Inject(PROFILE_TOKEN.APPLICATIONS.UPDATE_PROFILE)
    private readonly updateProfileApp: IUpdateProfileApplication,

    @Inject(PROFILE_TOKEN.APPLICATIONS.GET_PROFILE)
    private readonly getProfileApp: IGetProfileApplication,
  ) {}


  @Get('/:id')
  async getProfile(@Param('id') userId: Long) {
    return await this.getProfileApp.getProfile(userId);
  }

  @Patch('/:id')
  async updateProfile(@Param('id') userId: Long, data: UpdateProfileDTO) {
    return await this.updateProfileApp.updateProfile(userId, data);
  }
}
