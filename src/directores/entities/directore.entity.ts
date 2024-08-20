import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PeoresPeliculas } from 'src/peores-peliculas/entities/peores-pelicula.entity'

@Entity()
export class Director {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: string;

    @Column()
    fechaNacimiento: Date;

    @Column()
    nacionalidad: string;

    @Column('text')
    biografia: string;

    @OneToMany(() => PeoresPeliculas, (worstMovie) => worstMovie.director)
    peoresPeliculas: PeoresPeliculas[];
}
