import { BookCopyEntity } from "../repository/entities/book-copy.entity";

const CopyTypeMap = {
  book: { entity: BookCopyEntity, relation: 'book' },
//   magazine: { entity: MagazineCopyEntity, relation: 'magazine' },
};
