import { Column } from 'typeorm';

export class Address {
  @Column({ type: 'varchar', length: 255, nullable: true })
  street: string;

  @Column({ type: 'int', nullable: true })
  house_No: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  country: string;

  @Column({ type: 'int', length: 20, nullable: true })
  zipCode: number;
}
