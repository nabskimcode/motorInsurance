import { Test, TestingModule } from '@nestjs/testing';
import { MotorApiController } from './motor-api.controller';
import { MotorApiService } from './motor-api.service';

describe('MotorApiController', () => {
  let motorApiController: MotorApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MotorApiController],
      providers: [MotorApiService],
    }).compile();

    motorApiController = app.get<MotorApiController>(MotorApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(motorApiController.getHello()).toBe('Hello World!');
    });
  });
});
