import { Body, Controller, Delete, Get, Param, Post,Put,UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { editsalasdto, salasdto } from './DTO';
import { SalasService } from './salas.service';

@Controller('salas')
export class SalasController {


    constructor(
        private readonly salaService: SalasService){}
        
        
        @Post()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async createsala( @Body() dto: salasdto ){
        const data = await this.salaService.create_sala(dto);
        return {message :' sala creada correctamente', data}
        
        }
        @Get()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getmany (){
        
            const data = await this.salaService.getmany();
            return {message : data}
        
        }
        
        @Get(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getone (@Param() id:number){
        
            const data = await this.salaService.getone(id);
            return {message :data}
        
        }
        
        @Put(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async updateone (@Param() id:number, @Body() dto: editsalasdto){
        
            const data = await this.salaService.updateone(id,dto);
            return {message :'la sala se modifico correctamente', data}
        
        }
        
        @Delete(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async deleteone (@Param() id:number){
        
            const data = await this.salaService.deleteone(id);
            return {message :'se elimino la sala  correctamente', data}
        
        }

}
