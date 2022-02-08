import { Body, Controller, Delete, Get, Param, Post,Put , UseGuards} from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { CiudadService } from './ciudad.service';
import { ciudadesdto } from './DTO';
import { editciudaddto } from './ENTITIES';

@Controller('ciudad')
export class CiudadController {


    constructor(
        private readonly ciudadService: CiudadService){}
        
        
        @Post()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async createciudad( @Body() dto: ciudadesdto ){
        const data = await this.ciudadService.create_ciudad(dto);
        return {message :' ciudad creada correctamente', data}
        
        }
        @Get()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getmany (){
        
            const data = await this.ciudadService.getmany();
            return {message : data}
        
        }
        
        @Get(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getone (@Param() id:number){
        
            const data = await this.ciudadService.getone(id);
            return {message :data}
        
        }
        
        @Put(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async updateone (@Param() id:number, @Body() dto: editciudaddto){
        
            const data = await this.ciudadService.updateone(id,dto);
            return {message :'la ciudad se modifico correctamente', data}
        
        }
        
        @Delete(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async deleteone (@Param() id:number){
        
            const data = await this.ciudadService.deleteone(id);
            return {message :'se elimino la ciudad  correctamente', data}
        
        }

}
