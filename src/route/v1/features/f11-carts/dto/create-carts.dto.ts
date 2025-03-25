import { IsNotEmpty, IsString, IsMongoId, IsNumber, Min} from 'class-validator';
import { Type } from 'class-transformer';
import { CartItemDto } from './carts-items.dto';
export default class CreateCartsDto {

  @IsMongoId()
  @IsNotEmpty()
  userId: string;
  
  @IsMongoId({ message: 'productId must be a valid MongoDB ID' }) 
  @IsNotEmpty({ message: 'productId should not be empty' })
  productId: string;

  @IsString({ message: 'sku must be a string' })
  @IsNotEmpty({ message: 'sku should not be empty' })
  sku: string;

  @IsNumber({}, { message: 'quantity must be a number' })
  @Min(1, { message: 'quantity must be at least 1' })
  quantity: number;

}
