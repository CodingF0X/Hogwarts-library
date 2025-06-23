import { Injectable } from '@nestjs/common';
import { ILogoutService } from '../ports/services/logout.service.interface';
import { Response } from 'express';

@Injectable()
export class LogoutService implements ILogoutService {
  logout(res: Response): string {
    res.cookie('Authentication', '', { httpOnly: true, maxAge: 0 });
    return 'Logout successful';
  }
}
