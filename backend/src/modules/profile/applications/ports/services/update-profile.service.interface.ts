import { ProfileDomain } from 'src/modules/profile/domain/entities/profile.domain';
import { UpdateProfileDTO } from '../../DTO/update-profile.dto';

export interface IUpdateProfileService {
  updateProfile(userId: string, data: UpdateProfileDTO): Promise<ProfileDomain>;
}
