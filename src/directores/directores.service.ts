import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateDirectoreDto } from './dto/create-directore.dto';
import { UpdateDirectoreDto } from './dto/update-directore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './entities/directore.entity';

@Injectable()
export class DirectoresService {
  constructor(@InjectRepository(Director)
              private readonly directorRepository: Repository<Director>
  ) {
  }

  async create(createDirectoreDto: CreateDirectoreDto) {
    try {
      const director = this.directorRepository.create(createDirectoreDto);
      await this.directorRepository.save(director);
      const {nombre, fechaNacimiento} = director;
      return {director: {nombre, fechaNacimiento}};
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err.detail);
    }
  }

  async findAll() {
    return await this.directorRepository.find();
  }

  async findOne(id: number) {
    return await this.directorRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDirectoreDto: UpdateDirectoreDto) {
    await this.directorRepository.update(id, updateDirectoreDto);
    return await this.directorRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.directorRepository.delete(id);
    return {deleted: true};
  }
}