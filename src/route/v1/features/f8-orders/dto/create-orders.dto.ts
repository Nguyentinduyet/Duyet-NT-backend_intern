import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';

export default class CreateOrdersDto {
  @IsString()
  userId: string;

  @IsString()
  shopId: string;

  @IsOptional()
  @IsString()
  discountId?: string;

  @IsString()
  shippingMethodId: string;

  @IsString()
  totalAmount: string;

  @IsEnum(['pending', 'paid', 'shipped', 'cancelled'])
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
}
