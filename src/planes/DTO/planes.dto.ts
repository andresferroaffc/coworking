import { IsNotEmpty,IsString} from 'class-validator';

export class planesdto{

@IsNotEmpty()
@IsString()
plan_name: string;

@IsNotEmpty()
@IsString()
horas_vs_salas: string;

@IsNotEmpty()
valor: number;

@IsNotEmpty()
paquete_horas;

}