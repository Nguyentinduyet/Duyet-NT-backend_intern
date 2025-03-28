
import { IsOptional, IsString, IsEnum } from 'class-validator';
import { OrderStatus } from '../enums/orders-status.enum';

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

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}
