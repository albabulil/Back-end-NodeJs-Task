import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { OmdbModule } from './app/modules/omdb.module';
import { UserModule } from './app/modules/user.module';
import { EnvConfigModule } from './config/config.module';
import { LoggerModule } from './common/logger/logger.module';

import { DBConfigService, EnvConfigService } from './config/config.service';

@Module({
  imports: [
    // TODO: use `@nestjs/config`?
    TypeOrmModule.forRootAsync({
      imports: [EnvConfigModule],
      inject: [EnvConfigService],
      useClass: DBConfigService,
    }),
    LoggerModule,
    UserModule,
    OmdbModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes()
  }
}

