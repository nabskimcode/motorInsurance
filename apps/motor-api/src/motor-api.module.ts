import { Module } from '@nestjs/common';
import { MotorApiController } from './motor-api.controller';
import { MotorApiService } from './motor-api.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductModule } from './product/product.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: parseInt(configService.get('DB_PORT', '5432')),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'admin'),
        database: configService.get('DB_NAME', 'MOTOR_INSURANCE_WEBSITE'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),

    ProductModule,

    AuthModule,
  ],
  controllers: [MotorApiController],
  providers: [MotorApiService],
})
export class MotorApiModule {}
