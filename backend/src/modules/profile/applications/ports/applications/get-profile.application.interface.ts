import { ProfileDomain } from 'src/modules/profile/domain/entities/profile.domain';
import { Long } from 'typeorm';

export interface IGetProfileApplication {
  getProfile(userId: Long): Promise<ProfileDomain>;
}
