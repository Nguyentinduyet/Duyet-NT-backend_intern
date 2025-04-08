import { IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsString()
  productId: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}

export class CreateOrdersDto {
  @IsString()
  cartId: string;

  @IsArray() 
  @ValidateNested({ each: true })  
  @Type(() => OrderItemDto) 
  ordersItems: OrderItemDto[];
}
