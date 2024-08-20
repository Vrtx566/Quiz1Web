import { IsString, IsOptional, IsDate } from 'class-validator';

export class UpdateDirectoreDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsDate()
    @IsOptional()
    fechaNacimiento?: Date;

    @IsString()
    @IsOptional()
    nacionalidad?: string;

    @IsString()
    @IsOptional()
    biografia?: string;
}