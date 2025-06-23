import { Controller, Inject, Post, Res, UseGuards } from '@nestjs/common';
import { CurrentUser } from './current-user.decorator';
import { User } from './applications/ports/jwt/user.interface';
import { Response } from 'express';
import { TOKEN } from './applications/DI';
import { ILoginService } from './applications/ports/services/login.service.interface';
import { LoginResponse } from './applications/ports/jwt/login.response';
import { LocalAuthGuard } from './guards/local.guard';
import { ILogoutService } from './applications/ports/services/logout.service.interface';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(TOKEN.SERVICS.LOGIN) private readonly loginService: ILoginService,
    @Inject(TOKEN.SERVICS.LOGOUT)
    private readonly logoutService: ILogoutService,
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ): LoginResponse {
    return this.loginService.login(user, response);
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response): string {
    return this.logoutService.logout(response);
  }
}
