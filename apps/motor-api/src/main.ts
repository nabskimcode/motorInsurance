import { NestFactory } from '@nestjs/core';
import { MotorApiModule } from './motor-api.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MotorApiModule);

  const options = new DocumentBuilder()
    .setTitle('Motor Insurance API')
    .setDescription('API for motor insurance pricing')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description:
          'Please enter JWT token here in the format: Bearer <your-token>',
        bearerFormat: 'JWT',
      },
      'access-token', // This is the name of the security scheme
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
