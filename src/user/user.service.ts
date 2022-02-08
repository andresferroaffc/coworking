import { Injectable,BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {transporter} from '../config/mailer';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { usuario } from './ENTITIES';
import { planes } from 'src/planes/ENTITIES';
import {  userdto,edituserdto } from './DTO';
import { Roles } from 'src/auth/entities';

@Injectable()
export class UserService {


    constructor(
        @InjectRepository(usuario)
        private readonly userRepository: Repository <usuario>,
        @InjectRepository(planes)
        private readonly planesRepository: Repository <planes>,
        @InjectRepository(Roles)
        private readonly RolesRepository: Repository <Roles>,
        ){}
        
         // metodo crear un usuario, recibe un dto usuario y valida los campos unicos 
        async create_user (dto: userdto){
            const userexist = await this.userRepository.findOne({user: dto.user});
            const exitplan = await this.planesRepository.findOne({id: dto.planes});
            const exitrole = await this.RolesRepository.findOne({id: dto.role});
            const exitdoc = await this.userRepository.findOne({documento: dto.documento});
            const exitnit = await this.userRepository.findOne({nit: dto.nit});
            const exitemail = await this.userRepository.findOne({email: dto.email});

            if(userexist) throw new BadRequestException('el usuario ya existe');
            if(!exitplan) throw new BadRequestException('el plan no exite');
            if(!exitrole) throw new BadRequestException('el rol no exite');
            if(exitdoc) throw new BadRequestException('el documento ya exite');
            if(exitnit) throw new BadRequestException('el nit ya exite');
            if(exitemail) throw new BadRequestException('el email ya exite');
            
            this.sendemail(dto);
          // sentencia para encriptar contraseña del usuario
            dto.password = bcrypt.hashSync(dto.password, 10);
            const newuser = this.userRepository.create(dto);
            const users= await this.userRepository.save(newuser);
            return users;
        
        }
        

        // metodo enviar correos de activacion de cuenta
        async sendemail(dto: userdto){
           
            await  transporter.sendMail({
                 from: '"Reservas" <pruebacorreosactivacion@gmail.com>', // sender address
                 to: dto.email, // list of receivers
                 subject: "Activa tu cuenta", // Subject line
                 text: "", // plain text body
                 html: "<p>Por favor da cick en el sigiente enlace para activar tu cuenta: <a href='http://localhost:3000/active-user/3'>Activacion<a></p><br><p>Este es tu usuario y contraseña</p><p> usuario : "+dto.user+"</p><p> contraseña : "+dto.password+"</p>"  , // html body
               });
         }


        // metodo para consultar todos los usuarios
        async getmany(){
        const users= await this.userRepository.find();
        return users;
        
        }
        
        // metodo para consultar un usuario especifico, resive un parametro id
        async getone(id:number){
            
            const user = await this.userRepository.findOne(id);
            if(!user) throw new BadRequestException('el usuario no existe');
            return user;
        }
        
        // metodo para editar un usuario especifico, resive un parametro id y un dto edtiusuario
        async updateone (id:number, dto:edituserdto){
        
            const user = await this.getone(id);
            const editeuser = Object.assign(user, dto);
            const edite= await this.userRepository.save(editeuser);
            return edite;
        
        }
        
        // metodo para eliminar un usuario especifico, resive un parametro id
        async deleteone(id:number){
            
             const user = await this.getone(id);
           return await this.userRepository.remove(user);
        
        }




}
