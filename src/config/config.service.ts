import { Injectable, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class EnvConfigService {
    private readonly envConfig: Record<string, string>;

    constructor() {
      const envFile = `${process.env.NODE_ENV || 'dev'}.env`;
      const logger = new Logger();

      this.envConfig = dotenv.parse(fs.readFileSync(envFile));
      if (envFile != 'test.env') {
        logger.log(`Service is running using ${envFile}`);
      }
    }

    get(key: string): string {
      return this.envConfig[key];
    }
}

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
  constructor(
        private readonly config: EnvConfigService,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST || this.config.get('POSTGRES_HOST'),
      port: Number(process.env.POSTGRES_PORT || this.config.get('POSTGRES_PORT')),
      username: process.env.POSTGRES_USER || this.config.get('POSTGRES_USER'),
      password: process.env.POSTGRES_PASSWORD || this.config.get('POSTGRES_PASSWORD'),
      database: process.env.POSTGRES_DATABASE || this.config.get('POSTGRES_DATABASE'),
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: (process.env.DB_SYNC || this.config.get('DB_SYNC')) === 'true',
      logging: (process.env.DEBUG || this.config.get('DEBUG')) === 'true',
    };
  }
}
