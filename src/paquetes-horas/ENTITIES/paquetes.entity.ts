
import { planes } from 'src/planes/ENTITIES';
import {Entity,PrimaryGeneratedColumn,Column,OneToOne} from 'typeorm';
@ Entity ('paquetes_horas')
export class paquete_horas {

@PrimaryGeneratedColumn()
id: number;
@Column({type: 'varchar', length:50})
paquete_name : string;

@Column({type: 'varchar', length:50})
horas_vs_salas : string;

@Column({type: 'integer'})
valor : number;



 @OneToOne(_ => planes, planes=> planes.paquete_horas,{cascade:true})
 planes: planes;

}
