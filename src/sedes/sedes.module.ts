import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ciudad } from 'src/ciudad/ENTITIES';
import { usuario } from 'src/user/ENTITIES';

import { sede } from './ENTITIES';
import { SedesController } from './sedes.controller';
import { SedesService } from './sedes.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([sede,ciudad,usuario])
  ],
  controllers: [SedesController],
  providers: [SedesService],
  exports:[SedesService]
})
export class SedesModule {}
