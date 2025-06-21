import { AbstractEntity } from 'src/infrastructure/database/abstract.entity';
import { UserAccountEntity } from 'src/modules/account/repository/entities/user-account.entity';
import {
  Column,
  Entity,
  JoinColumn,
  Long,
  OneToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';

@Entity({ schema: 'profile', name: 'user_profile' })
@Unique(['userId'])
export class ProfileEntity extends AbstractEntity<ProfileEntity> {
  @PrimaryColumn({ type: 'bigint' })
  declare userId: Long;

  @Column({ type: 'int', nullable: true })
  phone: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'varchar', nullable: true })
  favourites: string[];

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @OneToOne(() => UserAccountEntity, (account) => account.profile, {
    cascade: ['insert', 'update'],
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  userAccount: UserAccountEntity;

  constructor(userProfile: Partial<ProfileEntity>) {
    super(userProfile);
    // Object.assign(this, userAccount);
  }
}
