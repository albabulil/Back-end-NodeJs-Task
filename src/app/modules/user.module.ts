import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from 'src/model/user.entity';

import { UserController } from '../controllers/v1/user.controller';

import { UserService } from '../services/v1/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController,],
    providers: [UserService],
})
export class UserModule { }
