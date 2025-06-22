import { ProfileDomain } from 'src/modules/profile/domain/entities/profile.domain';

export interface IGetProfileApplication {
  getProfile(userId: number): Promise<ProfileDomain>;
}
