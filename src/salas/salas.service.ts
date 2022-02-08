import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sede } from 'src/sedes/ENTITIES';
import { statussala } from 'src/status-salas/ENTITIES';
import { Repository } from 'typeorm';
import { editsalasdto, salasdto } from './DTO';
import { sala } from './ENTITIES';

@Injectable()
export class SalasService {

    
    constructor(
        @InjectRepository(sala)
        private readonly salaRepository: Repository <sala>,
        @InjectRepository(statussala)
        private readonly statussalaRepository: Repository <statussala>,
        @InjectRepository(sede)
        private readonly sedeRepository: Repository <sede>,
        ){}
        // metodo crear una sala, recibe un dto sala
        async create_sala (dto: salasdto){
            const salaexist = await this.salaRepository.findOne({sala_name: dto.sala_name});
            const statusexist = await this.statussalaRepository.findOne({id: dto.statuscode});
            const exitsede = await this.sedeRepository.findOne({id: dto.sede});

            if(!statusexist) throw new BadRequestException('el status no exite');
            if(!exitsede) throw new BadRequestException('la sede no existe');
            if(salaexist) throw new BadRequestException('la sala ya existe');
              const newsala = this.salaRepository.create(dto);
              const sala = await this.salaRepository.save(newsala);
              return sala;
        
        }
        // metodo para consultar todos las salas
        async getmany(){
        const salas= await this.salaRepository.find();
        return salas;
        
        }
        
        // metodo para consultar una sala especifico, resive un parametro id
        async getone(id:number){
            
            const sala = await this.salaRepository.findOne(id);
            if(!sala) throw new BadRequestException('la sala no existe');
            return sala;
        }
        
        // metodo para editar una sala especifica, resive un parametro id y un dto edtisala
        async updateone (id:number, dto:editsalasdto){
            const sala = await this.getone(id);
            const editesala = Object.assign(sala, dto);
            const edite= await this.salaRepository.save(editesala);
            return edite;
        
        }
        

         // metodo para eliminar una sala especifico, resive un parametro id
        async deleteone(id:number){
            
             const sala = await this.getone(id);
           return await this.salaRepository.remove(sala);
        
        }

}
