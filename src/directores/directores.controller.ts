import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { CreateDirectoreDto } from './dto/create-directore.dto';
import {UpdateDirectoreDto} from './dto/update-directore.dto';

@Controller('directores')
export class DirectoresController {
  constructor(private readonly directoresService: DirectoresService) {}

  @Post()
  create(@Body() createDirectoreDto: CreateDirectoreDto) {
    return this.directoresService.create(createDirectoreDto);
  }

  @Get()
  findAll() {
    return this.directoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirectoreDto: UpdateDirectoreDto) {
    return this.directoresService.update(+id, updateDirectoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directoresService.remove(+id);
  }

}
