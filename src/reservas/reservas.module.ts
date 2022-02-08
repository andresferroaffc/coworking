import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { reserva } from './ENTITIES';
import { sala } from 'src/salas/ENTITIES';
import { planes } from 'src/planes/ENTITIES';
import { usuario } from 'src/user/ENTITIES';

@Module({
  imports:[
    TypeOrmModule.forFeature([reserva,sala,usuario,planes])
  ],
  providers: [ReservasService],
  controllers: [ReservasController],
  exports:[ReservasService]
})
export class ReservasModule {}
