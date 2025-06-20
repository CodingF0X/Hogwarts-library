import { Long } from 'typeorm';

export interface IDeleteUserAccountService {
  delete(userId: Long): Promise<string>;
}
