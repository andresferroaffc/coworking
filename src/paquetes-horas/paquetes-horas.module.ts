import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paquete_horas } from './ENTITIES';
import { PaquetesHorasController } from './paquetes-horas.controller';
import { PaquetesHorasService } from './paquetes-horas.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([paquete_horas])
  ],
  controllers: [PaquetesHorasController],
  providers: [PaquetesHorasService],
  exports:[PaquetesHorasService]
})
export class PaquetesHorasModule {}
