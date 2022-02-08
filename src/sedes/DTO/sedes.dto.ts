import { IsNotEmpty,IsString} from 'class-validator';

export class sedesdto{

@IsNotEmpty()
@IsString()
sede_name: string;

@IsNotEmpty()
@IsString()
direccion_sede: string;

@IsNotEmpty()
ciudad;

@IsNotEmpty()
administrador_sede;


}