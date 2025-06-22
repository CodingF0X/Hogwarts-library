import { AbstractAudit } from 'src/infrastructure/database/abstract-audit.entity';
import { UserAccountEntity } from 'src/modules/account/repository/entities/user-account.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'profile', name: 'user_profile' })
export class ProfileEntity extends AbstractAudit {
  @PrimaryColumn({ type: 'uuid', nullable: false, unique: true })
  id: string;

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
  @JoinColumn({ name: 'id' })
  userAccount: UserAccountEntity;

  // constructor(userProfile: Partial<ProfileEntity>) {
  //   super(userProfile);
  //   // Object.assign(this, userAccount);
  // }
}
