import { ProfileDomain } from '../../domain/entities/profile.domain';
import { ProfileEntity } from '../../repository/entities/profile.entity';

export class Mapper {
  public static toProfileDomain(profile: ProfileEntity): ProfileDomain {
    return new ProfileDomain(profile);
  }
}
