import { ProfileDomain } from 'src/modules/profile/domain/entities/profile.domain';

export interface IGetProfileService {
  getProfile(id: string): Promise<ProfileDomain>;
}
