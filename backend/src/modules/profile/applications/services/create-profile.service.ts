import { Injectable } from '@nestjs/common';
import { ProfileEntity } from '../../repository/entities/profile.entity';
import { ProfileRepository } from '../../repository/profile.repository';
import { ICreateProfileService } from '../ports/services/create-profile.service.interface';

@Injectable()
export class CreateProfileService implements ICreateProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}
  async createProfile(userId: number): Promise<ProfileEntity | any> {
    const profile = new ProfileEntity({ userId: userId });
    return await this.profileRepository.create(profile);
  }
}
