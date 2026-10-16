import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateAuthDto } from './dito/create-auth.js';
import { ForgotPasswordDto } from './dito/forgot-password.js';
import { LoginAuthDto } from './dito/login-auth.js';
import { ResetPasswordDto } from './dito/reset-password.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: CreateAuthDto) {
    return this.authService.register(data);
  }

  @Post('login')
  login(@Body() data: LoginAuthDto) {
    return this.authService.login(data);
  }

  @Post('forgot-password')
  forgotPassword(@Body() data: ForgotPasswordDto) {
    return this.authService.forgotPassword(data);
  }

  @Put('reset-password/:token')
  resetPassword(
    @Param('token') token: string,
    @Body() data: ResetPasswordDto,
  ) {
    return this.authService.resetPassword(token, data);
  }
}
