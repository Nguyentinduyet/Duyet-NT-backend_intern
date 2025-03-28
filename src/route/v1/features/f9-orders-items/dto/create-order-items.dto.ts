import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber, IsMongoId } from 'class-validator';

export default class CreateOrderItemsDto {

  @IsMongoId()
  @IsNumber()
  _id: string;

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
  
  @IsNotEmpty()      
  @IsNumber()
  discount?: number;

}
