import { sede } from 'src/sedes/ENTITIES';
import {Entity,PrimaryGeneratedColumn,Column,OneToOne} from 'typeorm';
@ Entity ('ciudades')
export class ciudad {

@PrimaryGeneratedColumn()
id: number;
@Column({type: 'varchar', length:50})
ciudad_name : string;
@Column({type: 'varchar', length:100})
descripcion: string;

@OneToOne(_ => sede, sede=> sede.ciudad,{cascade:true})
sede: sede;

}