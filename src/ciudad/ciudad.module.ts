import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { ciudad } from './ENTITIES';

@Module({
  imports:[
    TypeOrmModule.forFeature([ciudad])
  ],
  providers: [CiudadService],
  controllers: [CiudadController],
  exports:[CiudadService]
})
export class CiudadModule {}
