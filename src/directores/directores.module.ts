import { Module } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { DirectoresController } from './directores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './entities/directore.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  controllers: [DirectoresController],
  providers: [DirectoresService]
})
export class DirectoresModule {}
