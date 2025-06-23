import { ProfileDomain } from '../../domain/entities/profile.domain';
import { Address } from '../../domain/value-objects/address.vo';
import { ProfileEntity } from '../../repository/entities/profile.entity';

export class Mapper {
  public static toProfileDomain(profile: ProfileEntity): ProfileDomain {
    const { address: rawDddress, ...rest } = profile;
    console.log(rawDddress)
    const domainProps: ProfileDomain = {
      ...rest,
      address: Address.create(rawDddress),
    };

    return new ProfileDomain(domainProps);
  }
}
