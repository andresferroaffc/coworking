import { Body, Controller, Delete, Get, Param, Post,Put,UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { SedesService } from './sedes.service';
import { editsedesdto, sedesdto } from './DTO';

@Controller('sedes')
export class SedesController {

constructor(
private readonly sedesService: SedesService){}


@Post()
@Roles(Role.Administrador)
@UseGuards(JwtAuthGuard, RolesGuard)
async createsede( @Body() dto: sedesdto ){
const data = await this.sedesService.create_sede(dto);
return {message :' sede creada correctamente', data}

}
@Get()
@Roles(Role.Administrador)
@UseGuards(JwtAuthGuard, RolesGuard)
async getmany (){

    const data = await this.sedesService.getmany();
    return {message : data}

}

@Get(':id')
@Roles(Role.Administrador)
@UseGuards(JwtAuthGuard, RolesGuard)
async getone (@Param() id:number){

    const data = await this.sedesService.getone(id);
    return {message :data}

}

@Put(':id')
@Roles(Role.Administrador)
@UseGuards(JwtAuthGuard, RolesGuard)
async updateone (@Param() id:number, @Body() dto: editsedesdto){

    const data = await this.sedesService.updateone(id,dto);
    return {message :'la sede se modifico correctamente', data}

}

@Delete(':id')
@Roles(Role.Administrador)
@UseGuards(JwtAuthGuard, RolesGuard)
async deleteone (@Param() id:number){

    const data = await this.sedesService.deleteone(id);
    return {message :'se elimino la sede  correctamente', data}

}



}
