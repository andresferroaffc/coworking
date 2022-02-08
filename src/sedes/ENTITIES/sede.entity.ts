import { ciudad } from 'src/ciudad/ENTITIES';
import { sala } from 'src/salas/ENTITIES';
import { usuario } from 'src/user/ENTITIES';
import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToOne,JoinColumn} from 'typeorm';
@ Entity ('sedes')
export class sede {

@PrimaryGeneratedColumn()
id: number;
@Column({type: 'varchar', length:50})
sede_name : string;

@Column({type: 'varchar', length:50})
direccion_sede : string;



@OneToOne(_ => sala, (sala) => sala.sede, {cascade: true})
sala: sala;

@ManyToOne(_ => ciudad, (ciudad) => ciudad.sede, {eager: true})
ciudad:ciudad;

@ManyToOne(_ => usuario, (usuario) => usuario.sede, {eager: true})
administrador_sede:usuario;


}
