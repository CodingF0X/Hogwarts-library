import { AbstractAudit } from 'src/infrastructure/database/abstract-audit.entity';
import { UserAccountEntity } from 'src/modules/account/repository/entities/user-account.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { IAddress } from '../../domain/value-objects/address.interface';
import { Address } from './address.table';

@Entity({ schema: 'profile', name: 'user_profile' })
export class ProfileEntity extends AbstractAudit {
  @PrimaryColumn({ type: 'bigint', nullable: false, unique: true })
  id: number;

  @Column({ type: 'int', nullable: true })
  phone: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'text', nullable: true })
  favourites: string[];

  // @Column(() => Address, { prefix: 'address_' })
  @Column({ type: 'simple-json', nullable: true })
  address: IAddress;

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
