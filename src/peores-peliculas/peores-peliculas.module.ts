import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { PeoresPeliculasController } from './peores-peliculas.controller';
import { PeoresPeliculas } from './entities/peores-pelicula.entity';
import { DirectoresModule } from '../directores/directores.module';
import { Director } from '../directores/entities/directore.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([PeoresPeliculas, Director]), // Import TypeOrmModule for Director and PeoresPeliculasRepository
    DirectoresModule,
  ],
  controllers: [PeoresPeliculasController],
  providers: [PeoresPeliculasService],
})
export class PeoresPeliculasModule {}