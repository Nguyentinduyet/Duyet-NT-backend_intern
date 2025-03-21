import { PartialType } from '@nestjs/mapped-types';
import CreateCartsDto from './create-carts.dto';

export default class UpdateCartsDto extends PartialType(CreateCartsDto) {}
