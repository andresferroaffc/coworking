import { Body, Controller, Delete, Get, Param, Post,Put,UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { editpaquetedto, paquetedto } from './DTO';
import { PaquetesHorasService } from './paquetes-horas.service';

@Controller('paquetes-horas')
export class PaquetesHorasController {
    constructor(
        private readonly paqueteService: PaquetesHorasService){}
        
        
        @Post()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async createpaquete( @Body() dto: paquetedto ){
        const data = await this.paqueteService.create_paquete(dto);
        return {message :' paquete creado correctamente', data}
        
        }
        @Get()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getmany (){
        
            const data = await this.paqueteService.getmany();
            return {message : data}
        
        }
        
        @Get(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getone (@Param() id:number){
        
            const data = await this.paqueteService.getone(id);
            return {message :data}
        
        }
        
        @Put(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async updateone (@Param() id:number, @Body() dto: editpaquetedto){
        
            const data = await this.paqueteService.updateone(id,dto);
            return {message :'le paquete se modifico correctamente', data}
        
        }
        
        @Delete(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async deleteone (@Param() id:number){
        
            const data = await this.paqueteService.deleteone(id);
            return {message :'se elimino el paquete  correctamente', data}
        
        }

}
