import { Long } from 'typeorm';

export interface IDeleteUserAccountApplication {
  delete(userId: Long): Promise<string>;
}
