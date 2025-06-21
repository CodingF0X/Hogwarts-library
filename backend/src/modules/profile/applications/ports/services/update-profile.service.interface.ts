import { ProfileDomain } from 'src/modules/profile/domain/entities/profile.domain';
import { UpdateProfileDTO } from '../../DTO/update-profile.dto';
import { Long } from 'typeorm';

export interface IUpdateProfileService {
  updateProfile(userId: Long, data: UpdateProfileDTO): Promise<ProfileDomain>;
}
