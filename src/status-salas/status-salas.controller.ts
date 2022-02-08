import { Body, Controller, Delete, Get, Param, Post,Put,UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { editstatussaladto, statussaladto } from './DTO';
import { StatusSalasService } from './status-salas.service';

@Controller('status-salas')
export class StatusSalasController {


    constructor(
        private readonly statusService: StatusSalasService){}
        
        
        @Post()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async createstatus( @Body() dto: statussaladto ){
        const data = await this.statusService.create_status(dto);
        return {message :' status creado correctamente', data}
        
        }
        @Get()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getmany (){
        
            const data = await this.statusService.getmany();
            return {message : data}
        
        }
        
        @Get(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getone (@Param() id:number){
        
            const data = await this.statusService.getone(id);
            return {message :data}
        
        }
        
        @Put(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async updateone (@Param() id:number, @Body() dto: editstatussaladto){
        
            const data = await this.statusService.updateone(id,dto);
            return {message :'el status se modifico correctamente', data}
        
        }
        
        @Delete(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async deleteone (@Param() id:number){
        
            const data = await this.statusService.deleteone(id);
            return {message :'se elimino el status  correctamente', data}
        
        }

}
