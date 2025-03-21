import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsMongoId, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CartItemDto } from './carts-items.dto';
export default class CreateCartsDto {
  @IsMongoId()
  userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  items: CartItemDto[];
}
