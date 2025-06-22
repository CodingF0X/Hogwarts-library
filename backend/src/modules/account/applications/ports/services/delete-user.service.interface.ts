export interface IDeleteUserAccountService {
  delete(userId: number): Promise<string>;
}
