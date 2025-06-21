import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';

export class ProfileDomain extends AbstractEntity<ProfileDomain> {
  public readonly phone: number;
  public readonly avatar: string;
  public readonly favourites: string[];
  public readonly address: string;

  constructor(input: Partial<ProfileDomain>) {
    super(input);

    if (!input.phone) throw Error('Phone is required');
    if (!input.avatar) throw Error('Avatar is required');
    if (!input.favourites) throw Error('Favourites is required');
    if (!input.address) throw Error('Address is required');

    this.phone = input.phone;
    this.avatar = input.avatar;
    this.favourites = input.favourites;
    this.address = input.address;
  }
}
