import { ProfileDomain } from 'src/modules/profile/domain/entities/profile.domain';
import { Long } from 'typeorm';

export interface IGetProfileService {
  getProfile(id: Long): Promise<ProfileDomain>;
}
