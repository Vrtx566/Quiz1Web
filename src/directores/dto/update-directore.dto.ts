import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectoreDto } from './create-directore.dto';

export class UpdateDirectoreDto extends PartialType(CreateDirectoreDto) {}
