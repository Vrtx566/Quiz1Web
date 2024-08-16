import {IsString, IsNotEmpty, IsDate, IsOptional} from 'class-validator';

export class CreateDirectoreDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
//error posible
    @IsString()
    @IsNotEmpty()
    fechaNacimiento: Date;

    @IsString()
    @IsNotEmpty()
    nacionalidad: string;

    @IsString()
    @IsOptional()
    biografia: string;
}