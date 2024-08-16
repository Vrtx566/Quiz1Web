import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeoresPeliculas } from './entities/peores-pelicula.entity';
import { Director } from '../directores/entities/directore.entity';
import {CreatePeoresPeliculaDto} from "./dto/create-peores-pelicula.dto";

@Injectable()
export class PeoresPeliculasService {
  constructor(
      @InjectRepository(PeoresPeliculas)
      private worstMoviesRepository: Repository<PeoresPeliculas>,
      @InjectRepository(Director)
      private directorRepository: Repository<Director>,
  ) {}

  async create(createPeoresPeliculaDto: CreatePeoresPeliculaDto) {
    try {
      const director = await this.directorRepository.findOne({ where: { id: createPeoresPeliculaDto.directorId } });
      if (!director) {
        throw new NotFoundException('Director with ID ${createPeoresPeliculaDto.directorId} not found');
      }

      const peoresPeliculas = this.worstMoviesRepository.create(createPeoresPeliculaDto);
      await this.worstMoviesRepository.save(peoresPeliculas);
      const {titulo, añoLanzamiento} = peoresPeliculas;
      return {peoresPeliculas: {titulo, añoLanzamiento}};
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err.detail);
    }
  }


  findAll(): Promise<PeoresPeliculas[]> {
    return this.worstMoviesRepository.find({ relations: ['director'] });
  }

  async findOne(id: number) {
    return this.worstMoviesRepository.findOne({ where: { id }, relations: ['director'] });
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