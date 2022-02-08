
import { reserva } from 'src/reservas/ENTITIES';
import { sede } from 'src/sedes/ENTITIES';
import { statussala } from 'src/status-salas/ENTITIES';
import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToOne} from 'typeorm';
@ Entity ('salas')
export class sala {

@PrimaryGeneratedColumn()
id: number;
@Column({type: 'varchar', length:50})
sala_name : string;
@Column({type: 'integer'})
num_personas : number;


@ManyToOne(_ => statussala, ( statussala) =>  statussala.sala, {eager: true})
statuscode: statussala;

@OneToOne(_ => reserva, (reserva) => reserva.sala)
reserva: reserva;

@ManyToOne(_ => sede, ( sede) =>  sede.sala, {eager: true})
 sede: sede;

 
}
