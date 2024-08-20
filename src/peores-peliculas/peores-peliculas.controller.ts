import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { CreatePeoresPeliculaDto } from './dto/create-peores-pelicula.dto';
import { UpdatePeoresPeliculaDto } from './dto/update-peores-pelicula.dto';
import {PeoresPeliculas} from "./entities/peores-pelicula.entity";

@Controller('peores-peliculas')
export class PeoresPeliculasController {
  constructor(private readonly worstMoviesService: PeoresPeliculasService) {}

  @Get()
  findAll(): Promise<PeoresPeliculas[]> {
    return this.worstMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PeoresPeliculas> {
    return this.worstMoviesService.findOne(id);
  }

  @Get('director/:id')
  findAllByDirector(@Param('id') id: number): Promise<PeoresPeliculas[]> {
    return this.worstMoviesService.findAllByDirector(id);
  }

  @Post()
  create(@Body() worstMovie: CreatePeoresPeliculaDto) {
    return this.worstMoviesService.create(worstMovie);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.worstMoviesService.remove(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePeoresPeliculaDto: UpdatePeoresPeliculaDto) {
    return this.worstMoviesService.update(+id, updatePeoresPeliculaDto);
  }
}