import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsMongoId, IsArray, ValidateNested, IsNumber} from 'class-validator';
import { Type } from 'class-transformer';
import { CartItemDto } from './carts-items.dto';
export default class CreateCartsDto {
  @IsMongoId()
  userId: string;
  @IsMongoId() // Kiểm tra ObjectId hợp lệ
  productId: string;

  @IsString()
  sku: string;

  @IsNumber()
  quantity: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  items: CartItemDto[];
}
