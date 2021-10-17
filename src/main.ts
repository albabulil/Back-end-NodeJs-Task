import "reflect-metadata";
import { Logger } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from './app.module';
import { EnvConfigService } from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('Main');

  const { APP_PORT, APP_NAME } = app.get(EnvConfigService)['envConfig'];
  const PORT = process.env.APP_PORT || APP_PORT;
  const NAME = process.env.APP_NAME || APP_NAME;
  
  await app.listen(PORT, () => logger.log(`${NAME} is running on port ${PORT} on ${process.env.NODE_ENV} mode`));
}

bootstrap();
