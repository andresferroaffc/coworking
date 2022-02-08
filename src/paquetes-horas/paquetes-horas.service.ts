import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { editpaquetedto, paquetedto } from './DTO';
import { paquete_horas } from './ENTITIES';

@Injectable()
export class PaquetesHorasService {

    
    
    constructor(
        @InjectRepository(paquete_horas)
        private readonly paqueteRepository: Repository <paquete_horas>){}
        // metodo crear un paquete, recibe un dto paquete
        async create_paquete (dto: paquetedto){
            const paqueteexist = await this.paqueteRepository.findOne({paquete_name: dto.paquete_name});
            if(paqueteexist) throw new BadRequestException('el paquete ya existe');
              const newpaquete = this.paqueteRepository.create(dto);
              const paquete = await this.paqueteRepository.save(newpaquete);
              return paquete;
        
        }
        // metodo para consultar todos los paquetes
        async getmany(){
        const paquetes= await this.paqueteRepository.find();
        return paquetes;
        
        }
        // metodo para consultar un paquete especifico, resive un parametro id
        async getone(id:number){
            
            const paquete = await this.paqueteRepository.findOne(id);
            if(!paquete) throw new BadRequestException('el paquete no existe');
            return paquete;
        }
        // metodo para editar un paquete especifico, resive un parametro id y un dto edtipaquete
        async updateone (id:number, dto:editpaquetedto){
        
            const paquete = await this.getone(id);
            const editepaquete = Object.assign(paquete, dto);
            const edite= await this.paqueteRepository.save(editepaquete);
            return edite;
        
        }
        
        // metodo para eliminar un paquete especifico, resive un parametro id
        async deleteone(id:number){
            
             const paquete = await this.getone(id);
           return await this.paqueteRepository.remove(paquete);
        
        }
}
