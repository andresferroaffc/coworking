import { IsNotEmpty,IsString} from 'class-validator';

export class salasdto{

@IsNotEmpty()
@IsString()
sala_name: string;

@IsNotEmpty()
num_personas: number;

@IsNotEmpty()
statuscode;

@IsNotEmpty()
sede;

}