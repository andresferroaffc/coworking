import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paquete_horas } from 'src/paquetes-horas/ENTITIES';
import { Repository } from 'typeorm';
import { planesdto } from './DTO';
import { editplanesdto } from './DTO/editplanes.dto';
import { planes } from './ENTITIES';

@Injectable()
export class PlanesService {
    constructor(
        @InjectRepository(planes)
        private readonly planesRepository: Repository <planes>,
        @InjectRepository(paquete_horas)
       private readonly paquete_horasRepository: Repository <paquete_horas>,

        ){}
        // metodo crear un plan, recibe un dto planes y valida fork
        async create_planes (dto: planesdto){
            const planesexist = await this.planesRepository.findOne({plan_name: dto.plan_name});
            const exitciudad = await this.paquete_horasRepository.findOne({id: dto.paquete_horas});
          
       
            if(!exitciudad) throw new BadRequestException('la paquete de horas no exite');
            if(planesexist) throw new BadRequestException('el plan ya existe');
              const newplanes = this.planesRepository.create(dto);
              const planes = await this.planesRepository.save(newplanes);
              return planes;
        
        }
        // metodo para consultar todos los planes
        async getmany(){
        const planes= await this.planesRepository.find();
        return planes;
        
        }
        // metodo para consultar un plan especifico, resive un parametro id
        async getone(id:number){
            
            const planes = await this.planesRepository.findOne(id);
            if(!planes) throw new BadRequestException('el plan no existe');
            return planes;
        }
        // metodo para editar un plan especifico, resive un parametro id y un dto edtiplan
        async updateone (id:number, dto:editplanesdto){
        
            const planes = await this.getone(id);
            const editeplanes = Object.assign(planes, dto);
            const edite= await this.planesRepository.save(editeplanes);
            return edite;
        
        }
        // metodo para eliminar un plan especifico, resive un parametro id
        async deleteone(id:number){
            
             const planes = await this.getone(id);
           return await this.planesRepository.remove(planes);
        
        }
}
