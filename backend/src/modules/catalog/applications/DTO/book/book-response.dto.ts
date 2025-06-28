import { PartialType } from "@nestjs/mapped-types";
import { BookDomain } from "src/modules/catalog/domain/entities/book.entity";

export class BookResponse extends PartialType(BookDomain){}