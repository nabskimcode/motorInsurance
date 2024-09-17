import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user',
  })
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The username of the user',
  })
  @Column()
  @IsString()
  username: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @Column()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'user',
    description: 'The role of the user',
    enum: ['user', 'admin'],
  })
  @Column({ type: 'enum', enum: ['user', 'admin'], default: 'user' })
  role: string;
}
