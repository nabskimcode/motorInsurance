import { Injectable } from '@nestjs/common';

@Injectable()
export class MotorApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
