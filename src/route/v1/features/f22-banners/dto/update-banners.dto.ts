import { PartialType } from '@nestjs/mapped-types';
import CreateBannersDto from './create-banners.dto';

export default class UpdateBannersDto extends PartialType(CreateBannersDto) {}
