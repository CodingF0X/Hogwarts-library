import { PickType } from "@nestjs/mapped-types";
import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
import { CreateBookDTO } from "src/modules/catalog/applications/DTO/book/create-book.dto";
import { authorDTO } from "./author.dto";

export class BookDTO extends PickType(CreateBookDTO,[
    'title',
    'publisher',
    'ISBN',
    'category',
    'description',
    'publication_date',

] as const) {
    @IsNumber()
    @IsNotEmpty()
    readonly id: number;

    // @IsArray()
    // readonly authors: authorDTO[];
}