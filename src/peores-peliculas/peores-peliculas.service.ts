import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeoresPeliculas } from './entities/peores-pelicula.entity';
import {CreatePeoresPeliculaDto} from "./dto/create-peores-pelicula.dto";

@Injectable()
export class PeoresPeliculasService {
  constructor(
      @InjectRepository(PeoresPeliculas)
      private worstMoviesRepository: Repository<PeoresPeliculas>,
  ) {}

  findAll(): Promise<PeoresPeliculas[]> {
    return this.worstMoviesRepository.find({ relations: ['director'] });
  }

  async findOne(id: number) {
    return this.worstMoviesRepository.findOne({ where: { id }, relations: ['director'] });
  }

  async create(createWorstMovieDto: CreatePeoresPeliculaDto) {
    const worstMovie = this.worstMoviesRepository.create(createWorstMovieDto);
    await this.worstMoviesRepository.save(worstMovie);
    return worstMovie;
  }

  async findAllByDirector(directorId: number): Promise<PeoresPeliculas[]> {
    return this.worstMoviesRepository
        .createQueryBuilder('peoresPeliculas')
        .leftJoinAndSelect('peoresPeliculas.director', 'director')
        .where('director.id = :directorId', { directorId })
        .getMany();
  }
  async remove(id: number): Promise<void> {
    await this.worstMoviesRepository.delete(id);
  }

}