import { Body, Controller, Delete, Get, Param, Post,Put, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { planesdto } from './DTO';
import { editplanesdto } from './DTO/editplanes.dto';
import { PlanesService } from './planes.service';
@Controller('planes')
export class PlanesController {
    constructor(
        private readonly PlanesService: PlanesService){}
        
        
        @Post()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async createplanes( @Body() dto: planesdto ){
        const data = await this.PlanesService.create_planes(dto);
        return {message :' plan creado correctamente', data}
        
        }
        @Get()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getmany (){
        
            const data = await this.PlanesService.getmany();
            return {message : data}
        
        }
        
        @Get(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getone (@Param() id:number){
        
            const data = await this.PlanesService.getone(id);
            return {message :data}
        
        }
        
        @Put(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async updateone (@Param() id:number, @Body() dto: editplanesdto){
        
            const data = await this.PlanesService.updateone(id,dto);
            return {message :'le plan se modifico correctamente', data}
        
        }
        
        @Delete(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async deleteone (@Param() id:number){
        
            const data = await this.PlanesService.deleteone(id);
            return {message :'se elimino el plan  correctamente', data}
        
        }



}
