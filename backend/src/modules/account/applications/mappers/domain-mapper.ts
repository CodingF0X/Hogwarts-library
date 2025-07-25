import { UserAccountDomain } from '../../domain/entities/user-account';
import { Email } from '../../domain/value-objects/email';
import { UserAccountEntity } from '../../repository/entities/user-account.entity';

export class DomainMapper {
  public static toAccountDomain(
    userAccountEntity: UserAccountEntity,
  ): UserAccountDomain {
    const { email: rawEmail, ...rest } = userAccountEntity;

    const domainProps: UserAccountDomain = {
      ...rest,
      email: new Email(rawEmail),
    };

    return new UserAccountDomain(domainProps);
  }

  public static toAccountDomainArray(
    accounts: UserAccountEntity[],
  ): UserAccountDomain[] {
    return accounts.map((account) => {
      const { email: rawEmail, ...rest } = account;

      const domainProps: UserAccountDomain = {
        ...rest,
        email: new Email(rawEmail),
      };

      return new UserAccountDomain(domainProps);
    });
  }
}
