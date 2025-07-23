import { AvailableBookSummaryDto } from "../../DTO/available-copies.dto";

export interface IFindAvalableBooksService {
    findAvailableBooks(bookId:number): Promise<AvailableBookSummaryDto>
}