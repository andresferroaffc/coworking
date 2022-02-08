import { Controller, Put,Param, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { ActiveUserService } from './active-user.service';

@Controller('active-user')
export class ActiveUserController {

    constructor(
        private readonly  ActiveUserService: ActiveUserService){}


    @Get(':id')
    @Roles(Role.Administrador)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async updateone (@Param() id:number){
    
        const data = await this.ActiveUserService.activeuser(id);
        return {message :'el usuario se activo correctamente', data}
    
    }

}
