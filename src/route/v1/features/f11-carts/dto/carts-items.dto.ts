import { IsMongoId, IsInt, Min, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CartItemDto {
    @IsMongoId()
    productId: string;
  
    @IsMongoId()
    skuId: string;
  
    @IsInt()
    @Min(1)
    quantity: number;
  }