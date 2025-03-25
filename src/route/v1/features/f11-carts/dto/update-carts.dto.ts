import { PartialType } from '@nestjs/mapped-types';
import CreateCartsDto from './create-carts.dto';
import { IsNotEmpty } from 'class-validator';

export default class UpdateCartsDto extends PartialType(CreateCartsDto) {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  sku: string;

  @IsNotEmpty()
  quantity: number;
}
