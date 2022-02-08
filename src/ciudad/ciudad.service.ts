import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ciudadesdto } from './DTO';
import { ciudad, editciudaddto } from './ENTITIES';


@Injectable()
export class CiudadService {

    constructor(
        @InjectRepository(ciudad)
        private readonly ciudadRepository: Repository <ciudad>){}
        // metodo paar crear ciudades recibe un dtociudad
        async create_ciudad (dto: ciudadesdto){
            const ciudadexist = await this.ciudadRepository.findOne({ciudad_name: dto.ciudad_name});
            if(ciudadexist) throw new BadRequestException('la ciudad ya existe');
              const newciudad = this.ciudadRepository.create(dto);
              const ciudad = await this.ciudadRepository.save(newciudad);
              return ciudad;
        
        }
        // metodo para consultar todas la ciudades
        async getmany(){
        const ciudad= await this.ciudadRepository.find();
        return ciudad;
        
        }
        // metodo para consultar una ciudad en especifico resive un parametro id
        async getone(id:number){
            
            const ciudad = await this.ciudadRepository.findOne(id);
            if(!ciudad) throw new BadRequestException('la ciudad no existe');
            return ciudad;
        }
        // metodo para editar una ciudad en especifico resive un parametro id y un dto edit ciudad
        async updateone (id:number, dto:editciudaddto){
        
            const ciudad = await this.getone(id);
            const editeciudad = Object.assign(ciudad, dto);
            const edite= await this.ciudadRepository.save(editeciudad);
            return edite;
        
        }
        // metodo para eliminar una ciudad en especifico resive un parametro id
        async deleteone(id:number){
            
             const ciudad = await this.getone(id);
           return await this.ciudadRepository.remove(ciudad);
        
        }


}
