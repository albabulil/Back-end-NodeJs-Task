import { Repository, Raw } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginatorKeys } from 'src/common/decorator/interfaces/param.interface';

import { OmdbEntity } from 'src/model/omdb.entity';
import { OmdbParamDto } from 'src/app/domain/omdb/omdb.dto';
@Injectable()
export class OmdbService {
    constructor(
        @InjectRepository(OmdbEntity)
        private readonly omdbRepo: Repository<OmdbEntity>,
    ) { }

    getAll(params?: OmdbParamDto, paginator?: PaginatorKeys): Promise<[OmdbEntity[], number]> {
        let condition = {};

        if (params.keyword) condition['title'] = Raw(alias => `${alias} ILIKE '%${params.keyword}%'`);

        let db = this.omdbRepo.createQueryBuilder('omdb')
            .where(condition)
            .limit(paginator.limit)
            .offset(paginator.skip)

        const result = db.getManyAndCount();

        return result;
    }

    getOne(id: string): Promise<OmdbEntity> {
        return this.omdbRepo.findOne({ id: id })
    }

}
