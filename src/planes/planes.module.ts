import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paquete_horas } from 'src/paquetes-horas/ENTITIES';
import { planes } from './ENTITIES';
import { PlanesController } from './planes.controller';
import { PlanesService } from './planes.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([planes,paquete_horas])
  ],
  controllers: [PlanesController],
  providers: [PlanesService],
  exports:[PlanesService]
})
export class PlanesModule {}
