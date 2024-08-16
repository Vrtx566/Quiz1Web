import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class CreateDirectoreDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsDate()
    @IsNotEmpty()
    fechaNacimiento: Date;

    @IsString()
    @IsNotEmpty()
    nacionalidad: string;

    @IsString()
    @IsOptional()
    biografia: string;
}