import { Response } from 'express';

export interface ILogoutService {
  logout(res: Response): string;
}
