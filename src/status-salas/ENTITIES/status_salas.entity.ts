
import { sala } from 'src/salas/ENTITIES';
import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToOne} from 'typeorm';
@ Entity ('status_salas')
export class statussala {

@PrimaryGeneratedColumn()
id: number;
@Column({type: 'varchar', length:50})
status_name : string;

@Column({type: 'varchar', length:50})
statuscode : string;

@OneToOne(_ => sala, sala=> sala.statuscode,{cascade:true})
sala: sala;

}
