import { Controller, Get } from '@nestjs/common';
import { MotorApiService } from './motor-api.service';

@Controller()
export class MotorApiController {
  constructor(private readonly motorApiService: MotorApiService) {}

  @Get()
  getHello(): string {
    return this.motorApiService.getHello();
  }
}
