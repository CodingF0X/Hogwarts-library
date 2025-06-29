export interface IDeleteBookService {
  delete(id: number): Promise<string>;
}
