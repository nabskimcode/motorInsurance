import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../_dto/register-request.dto';
import { User } from '../entity/user.entity';
import { LoginDto } from '../_dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse()
  @ApiOperation({
    summary: 'Register API',
    description: 'API for user register.',
  })
  async register(@Body() dto: RegisterUserDto): Promise<User> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiResponse({ status: 201, description: 'Successfully logged in.' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
