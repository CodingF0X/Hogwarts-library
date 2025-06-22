export interface IDeleteUserAccountService {
  delete(userId: string): Promise<string>;
}
