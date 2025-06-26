export interface IDeleteAuthorService {
  deleteById(id: number): Promise<string>;
  deleteByName(lastName: string): Promise<string>;
}
