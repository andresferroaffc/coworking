import { Body, Controller, Delete, Get, Param, Post,Put, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { ReservasService } from './reservas.service';
import { editreservasdto, reservasdto } from './DTO';


@Controller('reservas')
export class ReservasController {

    constructor(
        private readonly ReservasService: ReservasService){}
        
        
        @Post()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async createreserva( @Body() dto: reservasdto ){
        const data = await this.ReservasService.create_reserva(dto);
        return {message :' reserva creada correctamente', data}
        
        }
        @Get()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getmany (){
        
            const data = await this.ReservasService.getmany();
            return {message : data}
        
        }
        
        @Get(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getone (@Param() id:number){
        
            const data = await this.ReservasService.getone(id);
            return {message :data}
        
        }
        
        @Put(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async updateone (@Param() id:number, @Body() dto: editreservasdto){
        
            const data = await this.ReservasService.updateone(id,dto);
            return {message :'la reserva se modifico correctamente', data}
        
        }
        
        @Delete(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async deleteone (@Param() id:number){
        
            const data = await this.ReservasService.deleteone(id);
            return {message :'se elimino la reserva  correctamente', data}
        
        }
        
}
