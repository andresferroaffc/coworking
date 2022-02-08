import { IsNotEmpty,IsString} from 'class-validator';

export class paquetedto{

@IsNotEmpty()
@IsString()
paquete_name: string;

@IsNotEmpty()
@IsString()
horas_vs_salas: string;

@IsNotEmpty()
valor: number;

}