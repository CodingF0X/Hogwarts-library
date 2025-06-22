export interface IDeleteUserAccountApplication {
  delete(userId: number): Promise<string>;
}
