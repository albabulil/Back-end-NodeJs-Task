import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/user.entity';


@Injectable()
export class UserService { 
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ) {}

    getUsername():Promise <UserEntity>{
        const query = `
            select 
                u.id, 
                u.username, 
                (
                    select u2.username 
                    from users u2 
                    where u2.id = u.parent
                ) parentUsername 
            from users u`

        return this.userRepo.query(query);
    }
}
