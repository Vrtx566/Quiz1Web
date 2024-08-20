import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdatePeoresPeliculaDto {
    @IsString()
    @IsOptional()
    titulo?: string;

    @IsNumber()
    @IsOptional()
    añoLanzamiento?: number;

    @IsString()
    @IsOptional()
    genero?: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    @IsOptional()
    directorId?: number;
}