import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePeoresPeliculaDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsNumber()
    @IsNotEmpty()
    añoLanzamiento: number;

    @IsString()
    @IsNotEmpty()
    genero: string;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    directorId: number;
}