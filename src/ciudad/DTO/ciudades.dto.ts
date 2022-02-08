import { IsNotEmpty,IsString} from 'class-validator';

export class ciudadesdto{

@IsNotEmpty()
@IsString()
ciudad_name: string;

@IsNotEmpty()
@IsString()
descripcion: string;

}