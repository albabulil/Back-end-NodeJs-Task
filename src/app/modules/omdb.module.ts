import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OmdbEntity } from 'src/model/omdb.entity';

import { OmdbController } from '../controllers/v1/omdb.controller';

import { OmdbService } from '../services/v1/omdb.service';

@Module({
    imports: [TypeOrmModule.forFeature([OmdbEntity])],
    providers: [OmdbService,],
    controllers: [OmdbController,]
})
export class OmdbModule { }
