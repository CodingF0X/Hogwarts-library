import { Response } from 'express';
import { LoginResponse } from '../jwt/login.response';
import { User } from '../jwt/user.interface';

export interface ILoginService {
  login(user: User, response: Response): LoginResponse;
}
