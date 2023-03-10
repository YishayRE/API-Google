import { PartialType } from '@nestjs/mapped-types';
import { CreateYishayDto } from './create-yishay.dto';

export class UpdateYishayDto extends PartialType(CreateYishayDto) {}
