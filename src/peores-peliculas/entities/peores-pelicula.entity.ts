
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Director } from 'src/directores/entities/directore.entity';
@Entity()
export class PeoresPeliculas {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    titulo: string;

    @Column()
    añoLanzamiento: number;

    @Column()
    genero: string;

    @Column('text')
    descripcion: string;

    @ManyToOne(() => Director, (director) => director.peoresPeliculas)
    director: Director;
}
