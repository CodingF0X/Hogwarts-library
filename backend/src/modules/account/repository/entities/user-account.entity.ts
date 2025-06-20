import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { Column, Entity, Unique } from 'typeorm';

@Entity({ schema: 'accounts', name: 'user_account' })
@Unique(['email'])
export class UserAccountEntity extends AbstractEntity<UserAccountEntity> {
  @Column({ nullable: false, length: 100 })
  userName: string;

  @Column({ nullable: false, length: 255 })
  email: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  constructor(userAccount: Partial<UserAccountEntity>) {
    super(userAccount);
    // Object.assign(this, userAccount);
  }
}
