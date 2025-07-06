export class BookNotFoundException extends Error {
  constructor(bookId: number) {
    super(`Book with id ${bookId} not found`);
    this.name = 'BookNotFoundException';
  }
}

export class InventoryPersistanceExeption extends Error {
  constructor(public readonly original: any) {
    super('Failed to persist inventory');
    this.name = 'InventoryPersistenceError';
  }
}

export class InventoryNotFoundExeption extends Error {
  constructor(bookid: number) {
    super('Inventory not found '+ `for book Id ${bookid}`);
    this.name = 'InventoryNotFoundExeption';
  }
}
