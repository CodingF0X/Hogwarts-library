import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { Email } from '../value-objects/email';

export class UserAccountDomain extends AbstractEntity<UserAccountDomain> {
  readonly id: number;
  readonly userName: string;
  readonly email: Email;
  readonly password: string;
  readonly role: string = 'user';
  constructor(input: Partial<UserAccountDomain>) {
    super(input);

    if (!input.userName) throw Error('UserName is required');
    if (!input.email) throw Error('Email is required');
    if (!input.password) throw Error('Password is required');
    if (!input.role) throw Error('Role is required');
    if (!input.id && input.id != 0) throw Error('Id is required');
    
    this.userName = input.userName;
    this.email =
      input.email instanceof Email ? input.email : new Email(input.email);
    this.password = input.password;
    this.role = input.role;
    this.id = input.id;
  }
}
