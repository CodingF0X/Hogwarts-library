import { MediaType } from './enums/media.enum';

export class ItemNotFoundException extends Error {
  constructor(itemId: number, item: string) {
    super(`${item} with id ${itemId} not found`);
    this.name = 'ItemNotFoundException';
  }
}
export class BookNotFoundException extends ItemNotFoundException {
  constructor(bookId: number) {
    super(bookId, MediaType.BOOK);
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
    super('Inventory not found ' + `for book Id ${bookid}`);
    this.name = 'InventoryNotFoundExeption';
  }
}
