import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export default class CreateOrderItemsDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsOptional()
  @IsString()
  skuId?: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
