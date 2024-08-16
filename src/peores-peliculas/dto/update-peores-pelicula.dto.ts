import { PartialType } from '@nestjs/mapped-types';
import { CreatePeoresPeliculaDto } from './create-peores-pelicula.dto';

export class UpdatePeoresPeliculaDto extends PartialType(CreatePeoresPeliculaDto) {}
