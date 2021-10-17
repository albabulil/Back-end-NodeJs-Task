/*
https://docs.nestjs.com/openapi/decorators#decorators
*/

import { Request } from 'express';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { OmdbParamDto } from './omdb.dto';

export const OmdbParams = createParamDecorator((data: unknown, ctx: ExecutionContext): OmdbParamDto => {
    const req = ctx.switchToHttp().getRequest();

    const keyword = <string>req.query.q;
    return {
        keyword
    }
  },
);