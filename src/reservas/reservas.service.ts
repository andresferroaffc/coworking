import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { planes } from 'src/planes/ENTITIES';
import { sala } from 'src/salas/ENTITIES';
import { usuario } from 'src/user/ENTITIES';
import { Repository } from 'typeorm';
import { editreservasdto, reservasdto } from './DTO';
import { reserva } from './ENTITIES';

@Injectable()
export class ReservasService {
    constructor(
        @InjectRepository(reserva)
        private readonly reservaRepository: Repository <reserva>,
        @InjectRepository(usuario)
        private readonly usuarioRepository: Repository <usuario>,
        @InjectRepository(planes)
        private readonly planesRepository: Repository <planes>,
        @InjectRepository(sala)
        private readonly salaRepository: Repository <sala>,
        ){}

         // metodo crear un paquetereservas, recibe un dto paquete y valida los campos unicos y fk
        
        async create_reserva (dto: reservasdto){
            const reservaexist = await this.reservaRepository.findOne({reserva_code: dto.reserva_code});
            const exitusuario = await this.usuarioRepository.findOne({id: dto.user});
            const exitplanes = await this.planesRepository.findOne({id: dto.planes});
            const exitsala = await this.salaRepository.findOne({id: dto.sala});
            if(!exitusuario) throw new BadRequestException('el usuario no existe');
            if(!exitplanes) throw new BadRequestException('el plan no existe');
            if(!exitsala) throw new BadRequestException('la sala no existe');
            if(reservaexist) throw new BadRequestException('la reserva ya existe');
              const newreserva = this.reservaRepository.create(dto);
              const reserva = await this.reservaRepository.save(newreserva);
              return reserva;
        
        }

        // metodo para consultar todos las reservas
        async getmany(){
        const reservas= await this.reservaRepository.find();
        return reservas;
        
        }
        
        // metodo para consultar una reserva especifico, resive un parametro id
        async getone(id:number){
            
            const reserva = await this.reservaRepository.findOne(id);
            if(!reserva) throw new BadRequestException('la reserva no existe');
            return reserva;
        }
        
         // metodo para editar una reserva especifico, resive un parametro id y un dto edtireserva
        async updateone (id:number, dto:editreservasdto){
        
            const reserva = await this.getone(id);
            const editereserva = Object.assign(reserva, dto);
            const edite= await this.reservaRepository.save(editereserva);
            return edite;
        
        }
        
         // metodo para eliminar una reserva especifico, resive un parametro id
        async deleteone(id:number){
            
             const reserva = await this.getone(id);
           return await this.reservaRepository.remove(reserva);
        
        }

}
