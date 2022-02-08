import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {usuario } from 'src/user/ENTITIES';
import { ActiveUserController } from './active-user.controller';
import { ActiveUserService } from './active-user.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([usuario])
  ],
  controllers: [ActiveUserController],
  providers: [ActiveUserService]
})
export class ActiveUserModule {}
