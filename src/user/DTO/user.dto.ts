import {IsArray, IsEmail, IsNotEmpty,IsString, MaxLength, MinLength, IsEnum} from 'class-validator';


export class userdto{

@IsString()
razon_social: string;

@IsString()
@IsNotEmpty()
nombres_titular: string;

@IsString()
@IsNotEmpty()
apellidos_titular: string;

@IsString()
@IsNotEmpty()
tipo_identificacion : string;


@IsNotEmpty()
documento : number;


nit : number;

@IsNotEmpty()
telefono: number;

@IsString()
@IsNotEmpty()
user : string;

@IsNotEmpty()
@IsString()
@MinLength(6)
@MaxLength(100)
password: string;

@IsString()
@IsEmail()
email: string;

@IsNotEmpty()
code_id;

@IsNotEmpty()
state_code;

@IsNotEmpty()
supcription_code;

@IsNotEmpty()
tipo_persona;

@IsNotEmpty()
role;

@IsNotEmpty()
planes;



}