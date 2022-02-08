import { IsNotEmpty,IsString} from 'class-validator';

export class statussaladto{

@IsNotEmpty()
@IsString()
status_name: string;

@IsNotEmpty()
@IsString()
statuscode: string;


}