import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeoresPeliculasService } from "./peores-peliculas.service";
import { PeoresPeliculasController} from "./peores-peliculas.controller";
import { PeoresPeliculas} from "./entities/peores-pelicula.entity";
import { DirectoresModule} from "../directores/directores.module";

@Module({
  imports: [TypeOrmModule.forFeature([PeoresPeliculas]), DirectoresModule],
  providers: [PeoresPeliculasService],
  controllers: [PeoresPeliculasController],
})
export class PeoresPeliculasModule {}
