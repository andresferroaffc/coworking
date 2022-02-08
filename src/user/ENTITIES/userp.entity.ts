
import { Roles } from "src/auth/entities";
import { planes } from "src/planes/ENTITIES";
import { reserva } from "src/reservas/ENTITIES";
import { sede } from "src/sedes/ENTITIES";
import {JoinColumn,Entity, Column, PrimaryGeneratedColumn, OneToOne,ManyToOne} from "typeorm";

@Entity('usuarios')
export class usuario{

    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    razon_social:string;
    @Column({type: 'varchar'})
    nombres_titular : string;
    @Column({type: 'varchar'})
    apellidos_titular : string;
    @Column({type: 'varchar'})
    tipo_identificacion : string;
    @Column({type: 'varchar', unique: true})
    documento : number;
    @Column({type: 'varchar', unique: true,nullable:true})
    nit : number;
    @Column({type: 'varchar'})
    telefono: number;
    @Column({type: 'varchar',length:30, unique: true})
    user : string;
    @Column({type: 'varchar',length:100})
    password: string;
    @Column({type: 'varchar',length:30, unique: true})
    email: string;
    @Column({type: 'varchar',length:30})
    code_id: string;
    @Column({type: 'varchar',length:30})
    state_code: string;
    @Column({type: 'varchar',length:30})
    supcription_code: string;
    @Column({type: 'varchar'})
    tipo_persona : string;


    
@ManyToOne(_ => Roles, (Roles) => Roles.usuario, {eager: true})
role:Roles;

@ManyToOne(_ => planes, (planes) => planes.usuario, {eager: true})
planes:planes;

@OneToOne(_ => reserva, reserva=> reserva.usuario,{cascade:true})
reserva: reserva;

@OneToOne(_ => sede, (sede) => sede.administrador_sede, {cascade: true})
sede: sede;

}