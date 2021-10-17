import { Controller, Get, Param } from '@nestjs/common';
import { OmdbParams } from 'src/app/domain/omdb/omdb.decorator';
import { OmdbParamDto } from 'src/app/domain/omdb/omdb.dto';
import { PaginatorKeys } from 'src/common/decorator/interfaces/param.interface';
import { Paginator } from 'src/common/decorator/param.decorator';
import { PaginatedRaw } from 'src/common/interceptor/pagination.formatter';
import { OmdbEntity } from 'src/model/omdb.entity';


import { OmdbService } from '../../services/v1/omdb.service';

@Controller("v1/omdb")
export class OmdbController { 
    
    constructor(private omdbService: OmdbService) {}

    @Get()
    async getSearch(
        @Paginator() paginator: PaginatorKeys,
        @OmdbParams() omdbParams: OmdbParamDto,
    ):Promise<PaginatedRaw<OmdbEntity>>{
        const [omdb, count] = await this.omdbService.getAll(omdbParams, paginator);

        return new PaginatedRaw<any>({
            datetime: Number(new Date),       
            currentPage: paginator.page,
            limit: paginator.limit,
            count: count,
            data: omdb
        })
    }

    @Get('/:id')
    getDetail(
        @Param('id') id: string,
    ):Promise<any>{ 
        return this.omdbService.getOne(id)
    }

}
