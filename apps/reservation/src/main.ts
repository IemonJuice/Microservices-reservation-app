import { NestFactory } from '@nestjs/core';
import { ReservationModule } from './reservation.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(ReservationModule);
  const configService = app.get(ConfigService);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  app.useLogger(app.get(Logger));
  await app.listen(configService.get('PORT'));
}
bootstrap();
