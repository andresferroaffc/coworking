import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SedesModule } from './sedes/sedes.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { SalasModule } from './salas/salas.module';
import { StatusSalasModule } from './status-salas/status-salas.module';
import { PaquetesHorasModule } from './paquetes-horas/paquetes-horas.module';
import { PlanesModule } from './planes/planes.module';
import { ReservasModule } from './reservas/reservas.module';
import { UserModule } from './user/user.module';
import { ActiveUserModule } from './active-user/active-user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SedesModule,ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
type: 'postgres',
host: process.env.POSTGRES_HOST,
port: parseInt(<string> process.env.POSTGRES_PORT),
username: process.env.POSTGRES_USER,
password: process.env.POSTGRES_PASS,
database: process.env.POSTGRES_DB,
entities: [__dirname + './**/**/*entity{.ts,.js}'],
 autoLoadEntities: true,
 synchronize: true,
  }),
    CiudadModule,
    SalasModule,
    StatusSalasModule,
    PaquetesHorasModule,
    PlanesModule,
    ReservasModule,
    UserModule,
    ActiveUserModule,
    AuthModule
     ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
