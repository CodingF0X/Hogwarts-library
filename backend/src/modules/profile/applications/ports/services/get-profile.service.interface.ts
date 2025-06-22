import { ProfileDomain } from 'src/modules/profile/domain/entities/profile.domain';

export interface IGetProfileService {
  getProfile(id: number): Promise<ProfileDomain>;
}
