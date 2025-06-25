import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../applications/ports/jwt/jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request | any) => {
          const token = req.cookies.Authentication || req.Authentication;
          return token;
        },
      ]),

      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
    });
  }

  validate(jwtPayload: JwtPayload): JwtPayload {
    try {
      return jwtPayload;
    } catch (error) {
      this.logger.error(error.message);
      throw new UnauthorizedException(error.message);
    }
  }
}
