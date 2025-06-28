// import {
//   Column,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { AuthorEntity } from './author.entity';

// @Entity({schema:'catalog', name: 'catalog_items' })
// // @ChildEntity()
// export class CatalogItemEntity {
//   @PrimaryGeneratedColumn({ type: 'bigint' })
//   id!: string;

//   @Column()
//   title!: string;

//   @Column({ type: 'varchar' })
//   type!: 'book' | 'newspaper' | 'magazine';

//   @ManyToOne(() => AuthorEntity)
//   @JoinColumn({ name: 'author_id' })
//   author!: AuthorEntity;
// }
