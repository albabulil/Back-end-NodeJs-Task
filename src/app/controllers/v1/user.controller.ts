import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../services/v1/user.service';

@Controller('v1/users')
export class UserController { 

    constructor(private userService: UserService) {}

    @Get()
    get():Promise<any>{
        return this.userService.getUsername()
    }

}
