import { PartialType } from '@nestjs/mapped-types';
import CreateSkuDto from './create-skus.dto';

export default class UpdateSkuDto extends PartialType(CreateSkuDto) {}
