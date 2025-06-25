import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { User_Role } from 'src/modules/auth/roles.enum';
import { ProfileEntity } from 'src/modules/profile/repository/entities/profile.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ schema: 'accounts', name: 'user_account' })
@Unique(['email'])
export class UserAccountEntity extends AbstractEntity<UserAccountEntity> {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false, length: 100 })
  userName: string;

  @Column({ nullable: false, length: 255 })
  email: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  @Column({ nullable: false, length: 50, default: User_Role.USER })
  role: string;

  @OneToOne(() => ProfileEntity, (profile) => profile.userAccount, {
    cascade: ['insert'],
    eager: false,
  })
  profile: ProfileEntity;

  constructor(userAccount: Partial<UserAccountEntity>) {
    super(userAccount);
    // Object.assign(this, userAccount);
  }
}
