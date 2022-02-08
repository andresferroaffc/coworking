import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { statussala } from './ENTITIES';
import { StatusSalasController } from './status-salas.controller';
import { StatusSalasService } from './status-salas.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([statussala])
  ],
  controllers: [StatusSalasController],
  providers: [StatusSalasService],
  exports:[StatusSalasService]
})
export class StatusSalasModule {}
