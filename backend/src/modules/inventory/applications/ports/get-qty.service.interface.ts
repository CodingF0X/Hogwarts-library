export interface IGetQty {
  getQuantity(bookId: number): Promise<number>;
}
