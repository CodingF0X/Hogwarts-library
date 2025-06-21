import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { IUpdateProfileService } from '../ports';
import { Long } from 'typeorm';
import { ProfileDomain } from '../../domain/entities/profile.domain';
import { UpdateProfileDTO } from '../DTO/update-profile.dto';
import { ProfileRepository } from '../../repository/profile.repository';
import { Mapper } from '../mappers/domain-mapper';

@Injectable()
export class UpdateProfileService implements IUpdateProfileService {
  private readonly logger = new Logger(UpdateProfileService.name);

  constructor(private readonly profileRepository: ProfileRepository) {}
  async updateProfile(
    userId: Long,
    data: UpdateProfileDTO,
  ): Promise<ProfileDomain> {
    try {
      const profile = await this.profileRepository.findOneAndUpdate(
        { userId },
        data,
      );

      return Mapper.toProfileDomain(profile);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
