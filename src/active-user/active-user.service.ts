import { Injectable,BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { usuario } from 'src/user/ENTITIES';
import { edituserdto } from 'src/user/DTO';

@Injectable()
export class ActiveUserService {

    constructor(
        @InjectRepository(usuario)
        private readonly userRepository: Repository <usuario>,
      
        ){}
// metodo para activar usuario nuevo falta completarlo
async activeuser(id:number){

   const exituser = await this.userRepository.findOne(id);
   if(!exituser) throw new BadRequestException('el usuario no exite');
    exituser.state_code = "true";
    const active= await this.userRepository.save(exituser);
    return active;

}

}
