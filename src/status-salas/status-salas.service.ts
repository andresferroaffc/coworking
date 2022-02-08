import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { editstatussaladto, statussaladto } from './DTO';
import { statussala } from './ENTITIES';

@Injectable()
export class StatusSalasService {

    
    constructor(
        @InjectRepository(statussala)
        private readonly statusRepository: Repository <statussala>){}
        // metodo crear un status, recibe un dto paquete
        async create_status (dto: statussaladto){
            const statusexist = await this.statusRepository.findOne({status_name: dto.status_name});
            if(statusexist) throw new BadRequestException('el status ya existe');
              const newstatus = this.statusRepository.create(dto);
              const status = await this.statusRepository.save(newstatus);
              return status;
        
        }
        // metodo para consultar todos los status
        async getmany(){
        const status= await this.statusRepository.find();
        return status;
        
        }
        
         // metodo para consultar un status especifico, resive un parametro id
        async getone(id:number){
            
            const status = await this.statusRepository.findOne(id);
            if(!status) throw new BadRequestException('el status no existe');
            return status;
        }
        
        // metodo para editar un status especifico, resive un parametro id y un dto edtistatus
        async updateone (id:number, dto:editstatussaladto){
        
            const status = await this.getone(id);
            const editestatus = Object.assign(status, dto);
            const edite= await this.statusRepository.save(editestatus);
            return edite;
        
        }
        
        // metodo para eliminar un status especifico, resive un parametro id
        async deleteone(id:number){
            
             const status = await this.getone(id);
           return await this.statusRepository.remove(status);
        
        }

}
