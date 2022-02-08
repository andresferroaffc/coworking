import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usuario } from './ENTITIES';
import { TypeOrmModule } from '@nestjs/typeorm';
import { planes } from 'src/planes/ENTITIES';
import { Roles } from 'src/auth/entities';


@Module({
  imports:[
    TypeOrmModule.forFeature([usuario,planes,Roles])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
