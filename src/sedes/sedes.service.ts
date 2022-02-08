import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ciudad } from 'src/ciudad/ENTITIES';
import { usuario } from 'src/user/ENTITIES';
import { Repository } from 'typeorm';
import { editsedesdto, sedesdto } from './DTO';
import { sede } from './ENTITIES';

@Injectable()
export class SedesService {

    constructor(
@InjectRepository(sede)
private readonly sedeRepository: Repository <sede>,
@InjectRepository(ciudad)
private readonly ciudadRepository: Repository <ciudad>,
@InjectRepository(usuario)
private readonly usuarioRepository: Repository <usuario>,
){}

// metodo crear una sede, recibe un dto paquete
async create_sede (dto: sedesdto){
    const sedeexist = await this.sedeRepository.findOne({sede_name: dto.sede_name});
    const exitciudad = await this.ciudadRepository.findOne({id: dto.ciudad});
    const exituser = await this.usuarioRepository.findOne({id: dto.administrador_sede});
    if(sedeexist) throw new BadRequestException('la sede ya existe');
    if(!exitciudad) throw new BadRequestException('la ciudad no exite');
    if(!exituser) throw new BadRequestException('el usuario no exite');
 
      const newsede = this.sedeRepository.create(dto);
      const sedes= await this.sedeRepository.save(newsede);
      return sedes;

}

// metodo para consultar todas las sedes
async getmany(){
const sedes= await this.sedeRepository.find();
return sedes;

}

// metodo para consultar una sede especifico, resive un parametro id
async getone(id:number){
    
    const sede = await this.sedeRepository.findOne(id);
    if(!sede) throw new BadRequestException('la sede no existe');
    return sede;
}


 // metodo para editar una sede especifico, resive un parametro id y un dto edtisede
async updateone (id:number, dto:editsedesdto){

    const sede = await this.getone(id);
    const editesede = Object.assign(sede, dto);
    const edite= await this.sedeRepository.save(editesede);
    return edite;

}

// metodo para eliminar una sede especifico, resive un parametro id
async deleteone(id:number){
    
     const sede = await this.getone(id);
   return await this.sedeRepository.remove(sede);

}
}
