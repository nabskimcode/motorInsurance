import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MinLength,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'John',
    description: 'The username the user',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
    required: true,
    default: '123456',
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'user',
    enum: ['user', 'admin'],
    description: 'The role of the user',
    default: 'user',
  })
  @IsEnum(['user', 'admin'], { message: 'Role must be either user or admin' })
  role: string;
}
