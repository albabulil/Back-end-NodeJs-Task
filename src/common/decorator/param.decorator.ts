/**
 * https://docs.nestjs.com/openapi/decorators#decorators
 * 
 * @author ulil albab
 * @copyright	Copyright (c) 2020, https://github.com/albabulil
 */

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { PaginatorKeys } from "./interfaces/param.interface";

/**
 * Pagination
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {paginatorFn} page limit skip 
 */
export const Paginator = createParamDecorator((data: unknown, ctx: ExecutionContext): PaginatorKeys => {
  const req = ctx.switchToHttp().getRequest();

  let { page, limit } = req.query;
  let skip = 0;
  limit = isNaN(parseInt(limit)) ? 10 : parseInt(limit);
  skip = isNaN(parseInt(page)) ? skip : (parseInt(page) - 1) * parseInt(limit);
  page = isNaN(parseInt(page)) ? 1 : parseInt(page);
  console.log({
    page,
    limit,
    skip,
  });
  
  return {
    page,
    limit,
    skip,
  };
})
