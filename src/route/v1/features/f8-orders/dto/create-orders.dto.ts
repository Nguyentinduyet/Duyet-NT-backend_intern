import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';

export default class CreateOrdersDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  shopId: number;

  @IsOptional()
  @IsNumber()
  discountId?: number;

  @IsNumber()
  shippingMethodId: number;

  @IsNumber()
  totalAmount: number;

  @IsEnum(['pending', 'paid', 'shipped', 'cancelled'])
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
}
