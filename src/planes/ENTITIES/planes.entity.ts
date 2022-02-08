
import { paquete_horas } from 'src/paquetes-horas/ENTITIES';
import { reserva } from 'src/reservas/ENTITIES';
import { usuario } from 'src/user/ENTITIES';

import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToOne} from 'typeorm';
@ Entity ('planes')
export class planes {

@PrimaryGeneratedColumn()
id: number;
@Column({type: 'varchar', length:50})
plan_name : string;

@Column({type: 'varchar', length:50})
horas_vs_salas : string;

@Column({type: 'integer'})
valor : number;

@ManyToOne(_ => paquete_horas, (paquete_horas) => paquete_horas.planes, {eager: true})
paquete_horas: paquete_horas;

@OneToOne(_ => reserva, reserva=> reserva.planes,{cascade:true})
reserva: reserva;

@OneToOne(_ => usuario, (usuario) => usuario.planes, {cascade: true})
usuario: usuario;
}