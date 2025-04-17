import { PartialType } from '@nestjs/mapped-types';
import CreateBrandsDto from './create-brands.dto';

export default class UpdateBrandsDto extends PartialType(CreateBrandsDto) {}
