import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ProfileRepository } from '../../repository/profile.repository';
import { IGetProfileService } from '../ports';
import { Long } from 'typeorm';
import { ProfileDomain } from '../../domain/entities/profile.domain';

@Injectable()
export class GetProfileService implements IGetProfileService {
  private readonly logger = new Logger(GetProfileService.name);

  constructor(private readonly profileRepository: ProfileRepository) {}

  getProfile(userId: number): Promise<ProfileDomain> {
    try {
      return this.profileRepository.findOne({ userId });
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
