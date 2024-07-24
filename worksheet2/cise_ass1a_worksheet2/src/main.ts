import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  const PORT = process.env.PORT || 5000;
  await app.listen(PORT);
}
bootstrap();
