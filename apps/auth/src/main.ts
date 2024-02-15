import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  await app.listen(3001);
}
bootstrap();
