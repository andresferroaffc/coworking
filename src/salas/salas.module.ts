import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sede } from 'src/sedes/ENTITIES';
import { statussala } from 'src/status-salas/ENTITIES';
import { sala } from './ENTITIES';
import { SalasController } from './salas.controller';
import { SalasService } from './salas.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([sala,statussala,sede])
  ],
  controllers: [SalasController],
  providers: [SalasService],
  exports:[SalasService]
})
export class SalasModule {}
