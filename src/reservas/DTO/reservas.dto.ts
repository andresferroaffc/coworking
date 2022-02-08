import { IsNotEmpty,IsString} from 'class-validator';

export class reservasdto{

@IsNotEmpty()
@IsString()
reserva_code: string;

@IsNotEmpty()
user;
@IsNotEmpty()
sala;
@IsNotEmpty()
hora_inicio: Date;
@IsNotEmpty()
hora_fin: Date;
@IsNotEmpty()
fecha_inicio: Date;
@IsNotEmpty()
fecha_final: Date;
@IsNotEmpty()
planes;

}