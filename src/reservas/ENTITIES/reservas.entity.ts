import { planes } from 'src/planes/ENTITIES';
import {Entity,PrimaryGeneratedColumn,Column,OneToOne,ManyToOne,JoinColumn} from 'typeorm';
import { sala } from 'src/salas/ENTITIES';
import { usuario } from 'src/user/ENTITIES';


@ Entity ('reservas')
export class reserva {

@PrimaryGeneratedColumn()
id: number;
@Column({type: 'varchar'})
reserva_code : string;
@Column({type: 'time'})
hora_inicio : Date;
@Column({type: 'time'})
hora_fin : Date;
@Column({type: 'date'})
fecha_inicio : Date;
@Column({type: 'date'})
fecha_final : Date;

@ManyToOne(_ => usuario, (usuario) => usuario.reserva, {eager: true})
usuario: usuario;

@ManyToOne(_ => sala, (sala) => sala.reserva, {eager: true})
sala:sala;

@ManyToOne(_ => planes, (planes) => planes.reserva, {eager: true})
planes: planes;

}