import { PartialType } from '@nestjs/mapped-types';
import CreateOrdersDto from './create-orders.dto';
import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested  } from 'class-validator';
import CreateOrderItemsDto from '../../f9-orders-items/dto/create-order-items.dto';

export default class CheckoutReviewDto {

  @IsString()
  cartId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemsDto)
  ordersItems: string; 
  
  
}