import { Body, Controller, Delete, Get, Param, Post,Put, UseGuards} from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/strategy/roles.guard';
import { edituserdto, userdto } from './DTO';
import { UserService } from './user.service';


@Controller('user')
export class UserController {


    constructor(
        private readonly  UserService: UserService){}
        
        
        @Post()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async createsede( @Body() dto: userdto ){
        const data = await this. UserService.create_user(dto);
        return {message :' usuario creada correctamente', data}
        
        }
        @Get()
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getmany (){
        
            const data = await this. UserService.getmany();
            return {message : data}
        
        }
        
        @Get(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async getone (@Param() id:number){
        
            const data = await this. UserService.getone(id);
            return {message :data}
        
        }
        
        @Put(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async updateone (@Param() id:number, @Body() dto: edituserdto){
        
            const data = await this. UserService.updateone(id,dto);
            return {message :'el usuario se modifico correctamente', data}
        
        }
        
        @Delete(':id')
        @Roles(Role.Administrador)
        @UseGuards(JwtAuthGuard, RolesGuard)
        async deleteone (@Param() id:number){
        
            const data = await this. UserService.deleteone(id);
            return {message :'se elimino el usuario  correctamente', data}
        
        }


    
@Post('register')
@Roles(Role.Administrador)
@UseGuards(JwtAuthGuard, RolesGuard)
async Publicregister(
    @Body() dto: userdto
){

const data = await this.UserService.create_user(dto);
return {message :' usuario registrado correctamente', data}
}

}
