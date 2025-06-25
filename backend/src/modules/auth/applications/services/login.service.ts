import { Injectable } from '@nestjs/common';
import { ILoginService } from '../ports/services/login.service.interface';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../ports/jwt/jwt.payload';
import { LoginResponse } from '../ports/jwt/login.response';
import { User } from '../ports/jwt/user.interface';

@Injectable()
export class LoginService implements ILoginService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User, res: Response): LoginResponse {
    const expiresIn = new Date();
    expiresIn.setSeconds(
      Number(
        expiresIn.getSeconds() +
          this.configService.getOrThrow<string>('JWT_EXPIRATION'),
      ),
    );

    const tokenPayload: JwtPayload = {
      userName: user.userName,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(tokenPayload);
    res.cookie('Authentication', accessToken, {
      httpOnly: true,
      expires: expiresIn,
    });

    return {
      accessToken,
      user,
    };
  }
}
