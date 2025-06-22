export interface IDeleteUserAccountApplication {
  delete(userId: string): Promise<string>;
}
